import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as CANNON from 'cannon-es'; // 使用 cannon-es 作为物理引擎
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';




// 初始化场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// 初始化第一人称摄像头
const firstPersonCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
firstPersonCamera.position.set(0, 1.6, 0);

// 初始化全局摄像头（上帝视角）
const globalCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
// 设置摄像机的位置，更靠近地面
globalCamera.position.set(0, 200, 400); // 更低的高度（y=200）和更近的距离（z=400）
globalCamera.lookAt(0, 0, 0); // 朝向场景的中心

// 当前激活的摄像头
let activeCamera = firstPersonCamera;

// 初始化渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加光源
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10);
scene.add(light);

// 地面：左下角为 (0, 0, 0)
const groundSize = 1000;  // 增大地面大小
const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);

// 将地面放置在 (0, 0, 0)，并旋转以使其平放
ground.position.set(0, 0, 0); // 左下角为 (0, 0, 0)x    
ground.rotation.x = -Math.PI / 2;  // 确保地面与 XZ 平面平行
scene.add(ground);

// 初始化第一人称控制器
const controls = new PointerLockControls(firstPersonCamera, renderer.domElement);

// 修改全局视角的OrbitControls
const orbitControls = new OrbitControls(globalCamera, renderer.domElement);
orbitControls.enableDamping = true;  // 启用惯性效果
orbitControls.dampingFactor = 0.05;
orbitControls.screenSpacePanning = true;  // 启用平移
orbitControls.enableZoom = true;  // 启用缩放
orbitControls.minDistance = 50;  // 最小缩放距离
orbitControls.maxDistance = 1000;  // 限制最大缩放距离，确保视角不会太远

// 初始化物理世界
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);  // 设置重力

// 添加地面到物理世界
const groundBody = new CANNON.Body({
    mass: 0,  // 静态物体
    shape: new CANNON.Plane(),
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);

// 添加玩家（摄像头）到物理世界
const playerBody = new CANNON.Body({
    mass: 1,  // 可移动物体
    shape: new CANNON.Sphere(0.5),
    position: new CANNON.Vec3(0, 1.6, 0),
});
world.addBody(playerBody);

// 按键状态
const keyState = {};
window.addEventListener('keydown', (event) => (keyState[event.code] = true));
window.addEventListener('keyup', (event) => (keyState[event.code] = false));

// 移动速度
const moveSpeed = 5;

// 切换摄像头
window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC') {  // 按下 C 键切换视角
        activeCamera = activeCamera === firstPersonCamera ? globalCamera : firstPersonCamera;

        if (activeCamera === globalCamera) {
            orbitControls.enabled = true;  // 启用 OrbitControls
            controls.unlock();  // 解锁鼠标（解除第一人称控制）
        } else {
            orbitControls.enabled = false;  // 禁用 OrbitControls
            controls.lock();  // 锁定鼠标（进入第一人称控制）
        }
    }
});

// 动画循环
function animate() {
    requestAnimationFrame(animate);

    // 更新物理世界
    world.step(1 / 60);

    // 更新第一人称摄像头位置
    if (activeCamera === firstPersonCamera && controls.isLocked) {
        const velocity = playerBody.velocity;

        // 重置速度
        velocity.x = 0;
        velocity.z = 0;

        // 计算移动方向
        const forward = new THREE.Vector3();
        firstPersonCamera.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();

        const right = new THREE.Vector3();
        right.crossVectors(firstPersonCamera.up, forward).normalize();

        if (keyState['KeyW']) velocity.vadd(forward.multiplyScalar(moveSpeed), velocity);
        if (keyState['KeyS']) velocity.vadd(forward.multiplyScalar(-moveSpeed), velocity);
        if (keyState['KeyA']) velocity.vadd(right.multiplyScalar(-moveSpeed), velocity);
        if (keyState['KeyD']) velocity.vadd(right.multiplyScalar(moveSpeed), velocity);
    }

    // 同步物理世界中的玩家位置到第一人称摄像头
    firstPersonCamera.position.copy(playerBody.position);

    // 更新 OrbitControls
    if (activeCamera === globalCamera) {
        orbitControls.update();
    }

    // 渲染场景
    renderer.render(scene, activeCamera);
}

// 调整窗口大小
window.addEventListener('resize', () => {
    firstPersonCamera.aspect = window.innerWidth / window.innerHeight;
    firstPersonCamera.updateProjectionMatrix();

    globalCamera.aspect = window.innerWidth / window.innerHeight;
    globalCamera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 开始动画循环
animate();


//加载 .glb 文件
// const loader = new GLTFLoader();
// loader.load(
//     './3dmodel/box2.glb', // 替换为你的 .glb 文件路径
//     (gltf) => {
//         const model = gltf.scene;
//         model.scale.set(0.1, 0.1, 0.1); // 设置模型大小
//         model.position.set(1, 1, 0); // 设置模型位置
//         scene.add(model);
//     },
//     (xhr) => {
//         // 加载进度
//         console.log(`模型加载进度: ${(xhr.loaded / xhr.total) * 100}%`);
//     },
//     (error) => {
//         // 加载失败
//         console.error('模型加载失败', error);
//     }

// );





//#region 模型渲染
/**
 * 建筑物渲染
 */
function commonAreaRendering(dataJson) {

}

/**
 * 堆场渲染
 */
function boxAreaRendering(dataJson) {
     for(var i=0;i<dataJson.rows.length;i++){
        var dataRow = dataJson.rows[i];
        console.log(dataRow);

     }
}

/**
 * 堆场集装箱渲染
 */
function boxsRendering(dataJson) {

}
//#endregion


//boxAreaRendering(getJson('./testData/boxAreaData.json'));
/**
 * json文件读取
 */
function getJson(dataName){
    $.ajaxSettings.async = false;  //设为同步请求
    var data = $.getJSON(dataName);
    $.ajaxSettings.async = true;  //设为异步请求
    return data.responseJSON;
}

// 根据 JSON 绘制箱区
// 绘制箱区的网格
function drawContainerZoneGrid(zone) {
    const { X, Y, ZoneDirection, XDirection, YDirection, X1, Y1, Color, Name } = zone;

    const boxLength = 12.5; // 每个贝位的长度
    const boxHeight = 5;    // 每个排位的高度
    const gridColor = new THREE.Color(Color || 0xFFFFFF); // 网格颜色

    const lineMaterial = new THREE.LineBasicMaterial({ color: gridColor });
    const lineGeometry = new THREE.BufferGeometry();
    const vertices = [];

    // 起点坐标
    const startX = X1 || 0; // 起点 X 坐标
    const startZ = -(Y1 || 0); // 起点 Z 坐标（负值向下）

    // 方向控制因子
    const isHorizontal = ZoneDirection === false; // 判断是否水平布局
    const xFactor = XDirection ? 1 : -1;  // 贝位方向（向左或向右）
    const zFactor = YDirection ? 1 : -1;  // 排位方向（向上或向下）

    // 绘制横向线条（行）
    for (let row = 0; row < Y; row++) {
        const z = startZ - row * (isHorizontal ? boxHeight : boxLength) * zFactor;
        const xEnd = startX + X * (isHorizontal ? boxLength : boxHeight) * xFactor;
        vertices.push(startX, 0.1, z, xEnd, 0.1, z);
    }

    // 绘制纵向线条（列）
    for (let col = 0; col < X; col++) {
        const x = startX + col * (isHorizontal ? boxLength : boxHeight) * xFactor;
        const zEnd = startZ - Y * (isHorizontal ? boxHeight : boxLength) * zFactor;
        vertices.push(x, 0.1, startZ, x, 0.1, zEnd);
    }

    // 绘制封口线（四个边）
    const bottomZ = startZ - Y * (isHorizontal ? boxHeight : boxLength) * zFactor;
    const xEnd = startX + X * (isHorizontal ? boxLength : boxHeight) * xFactor;
    vertices.push(startX, 0.1, startZ, xEnd, 0.1, startZ); // 上边框
    vertices.push(startX, 0.1, bottomZ, xEnd, 0.1, bottomZ); // 下边框
    vertices.push(startX, 0.1, startZ, startX, 0.1, bottomZ); // 左边框
    vertices.push(xEnd, 0.1, startZ, xEnd, 0.1, bottomZ); // 右边框

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const gridLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(gridLines);

    // 添加箱区名称标注
    if (Name) {
        const centerX = startX + (X * (isHorizontal ? boxLength : boxHeight) * xFactor) / 2;
        const centerZ = startZ - (Y * (isHorizontal ? boxHeight : boxLength) * zFactor) / 2;

        const loader = new FontLoader();
        loader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            function (font) {
                const textGeometry = new TextGeometry(Name, {
                    font: font,
                    size: 3, // 字体大小
                    height: 0.5, // 文字厚度
                });

                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xbb0800 });
                const outlineGeometry = new TextGeometry(Name, {
                    font: font,
                    size: 3,
                    height: 0.5,
                });

                const outlineMaterial = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.BackSide, // 白色描边
                });

                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);

                // 调整描边宽度
                outlineMesh.scale.set(1.05, 1.05, 1.05);

                // 设置文字位置
                textMesh.position.set(centerX, 1, centerZ);
                outlineMesh.position.set(centerX, 1, centerZ);

                // 旋转文字
                textMesh.rotation.x = -Math.PI / 2;
                outlineMesh.rotation.x = -Math.PI / 2;

                scene.add(outlineMesh);
                scene.add(textMesh);
            },
            undefined,
            function (error) {
                console.error('字体加载失败', error);
            }
        );
    }
}






// 调用辅助工具
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

// 遍历所有箱区并绘制
var containerZones= getJson('./testData/boxAreaData.json');
for (var i=0;i<containerZones.rows.length;i++) {
    drawContainerZoneGrid(containerZones.rows[i]);
}