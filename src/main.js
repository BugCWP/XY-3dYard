import Stats from 'stats.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as CANNON from 'cannon-es'; // 使用 cannon-es 作为物理引擎
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import axios from 'axios';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';





// 初始化场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// 初始化第一人称摄像头
const firstPersonCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
firstPersonCamera.position.set(300, 10, 300);

// 初始化全局摄像头（上帝视角）
const globalCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
// 设置摄像机的位置，更靠近地面

globalCamera.position.set(1000, 200, 1200);
//globalCamera.lookAt(1000, 0, 1000); // 让摄像机指向地图中心
globalCamera.updateProjectionMatrix();

// 当前激活的摄像头
let activeCamera = globalCamera;

// 初始化渲染器
//const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 添加光照
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // 柔和的环境光
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 平行光
directionalLight.position.set(10, 10, 10); // 设置光源方向
scene.add(directionalLight);

// 加载 HDR 文件
const rgbeLoader = new RGBELoader();
rgbeLoader.load('/textures/sunflowers_puresky_1k.hdr', (texture) => {
    // 设置纹理的映射方式
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // 将 HDR 纹理应用为场景背景
    scene.background = texture;

    // 设置场景的环境光源
    scene.environment = texture;
});

// 加载纹理
const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load('/textures/gravel_concrete_03_diff_1k.jpg', () => {
    // 确保纹理加载后启用Mipmap
    groundTexture.minFilter = THREE.LinearMipmapLinearFilter;
});
// 设置纹理的平铺模式
groundTexture.wrapS = THREE.RepeatWrapping; // 水平方向重复
groundTexture.wrapT = THREE.RepeatWrapping; // 垂直方向重复
groundTexture.repeat.set(200, 200); // 设置纹理的平铺次数（10x10）

// 地面：左上角为 (0, 0, 0)
const groundSize = 50000; // 增大地面大小
const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize);
const groundMaterial = new THREE.MeshBasicMaterial({
    map: groundTexture, // 应用加载的纹理
    side: THREE.DoubleSide, // 双面可见
    transparent: true, // 启用透明
    opacity: 1.0, // 设置透明度（0.0 完全透明，1.0 不透明）
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);

// 将地面放置在 (0, 0, 0)，并旋转以使其平放
ground.position.set(500, -0.1, 500); // 左下角为 (0, 0, 0)x    
ground.rotation.x = -Math.PI / 2; // 确保地面与 XZ 平面平行
scene.add(ground);



// 初始化第一人称控制器
const controls = new PointerLockControls(firstPersonCamera, renderer.domElement);

// 修改全局视角的OrbitControls
const orbitControls = new OrbitControls(globalCamera, renderer.domElement);
orbitControls.enableDamping = true; // 启用惯性效果
orbitControls.dampingFactor = 0.05;
orbitControls.screenSpacePanning = true; // 启用平移
orbitControls.enableZoom = true; // 启用缩放
orbitControls.maxDistance = 1500; // 最大缩放距离，确保视角不会太远


// 设置最小距离，避免相机穿透物体
orbitControls.minDistance = 10; // 设置相机的最小距离（单位：世界坐标系的单位，例如米）
// 设置最大距离，避免相机距离过远
orbitControls.maxDistance = 1500; // 可以根据实际情况调整

// 设置俯视视角限制
//orbitControls.maxPolarAngle = Math.PI / 2; // 设置最大极角为 90°，防止俯视角度过小，避免进入地面

orbitControls.target.set(1000, 0, 1000);
orbitControls.update();

// 设置相机的近裁剪面和远裁剪面（有助于防止穿模）
globalCamera.near = 0.1; // 设置近裁剪面
globalCamera.far = 2000; // 设置远裁剪面
globalCamera.updateProjectionMatrix(); // 更新投影矩阵，确保设置生效

// 设置摄像头的最小高度（避免进入地面以下）
const minCameraHeight = 20; // 最小高度，避免摄像头低于地面


// 初始化物理世界
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // 设置重力

// 创建地面的物理材料
const groundWorldMaterial = new CANNON.Material();
groundWorldMaterial.restitution = 0; // 设置没有弹力
groundWorldMaterial.friction = 1; // 设置较高的摩擦力
// 添加地面到物理世界
const groundBody = new CANNON.Body({
    mass: 0, // 静态物体
    material: groundMaterial, // 应用地面材质
    shape: new CANNON.Plane(),
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);

// 创建人物的物理材质
const playerMaterial = new CANNON.Material();
playerMaterial.restitution = 0; // 设置没有弹力
playerMaterial.friction = 0.8; // 设置摩擦力
// 创建玩家物理体
const capsuleShape = new CANNON.Cylinder(0.5, 0.5, 3, 8); // 半径 0.5，高度 2
const playerBody = new CANNON.Body({
    mass: 1, // 可移动物体
    material: playerMaterial, // 使用设置的物理材质
    position: new CANNON.Vec3(300, 10, 300), // 初始位置
});
playerBody.addShape(capsuleShape);
// 监听碰撞，减少反弹
playerBody.addEventListener('collide', function(event) {
    if (event.body === groundBody) {
        playerBody.velocity.y = Math.max(playerBody.velocity.y, 0); // 在接触地面时将垂直速度设置为零
    }
});
const fixedYPosition = 3; // 固定的 Y 轴位置

// 在物理世界更新时锁定 Y 轴
world.addEventListener('postStep', function() {
    playerBody.position.y = fixedYPosition;
    playerBody.velocity.y = 0; // 清除任何 Y 轴上的速度
});
world.addBody(playerBody);


// 按键状态
const keyState = {};
window.addEventListener('keydown', (event) => (keyState[event.code] = true));
window.addEventListener('keyup', (event) => (keyState[event.code] = false));
// 锁定鼠标
document.addEventListener('dblclick', () => {
    controls.lock(); // 激活鼠标锁定
});
// 移动速度
const moveSpeed = 20;
if (playerBody.velocity.length() > moveSpeed) {
    playerBody.velocity.scale(moveSpeed / playerBody.velocity.length(), playerBody.velocity);
}
// 切换摄像头
// 获取下拉框元素
const cameraSelect = document.getElementById('cameraSelect');
cameraSelect.value = 'globalCamera'; // 设置下拉框初始选中项

// 监听下拉框变化事件
cameraSelect.addEventListener('change', (event) => {
    const selectedCamera = event.target.value;

    // 切换到选定的摄像头
    if (selectedCamera === 'firstPersonCamera') {
        activeCamera = firstPersonCamera;
        orbitControls.enabled = false; // 禁用 OrbitControls
        controls.lock(); // 锁定鼠标进入第一人称控制
    } else if (selectedCamera === 'globalCamera') {
        activeCamera = globalCamera;
        orbitControls.enabled = true; // 启用 OrbitControls
        controls.unlock(); // 解锁鼠标，退出第一人称控制
    }
});
// 创建 FPS、MS、Memory 三个 Stats 实例
const stats1 = new Stats();
const stats2 = new Stats();
const stats3 = new Stats();

// 设置每个 Stats 实例的显示类型
stats1.setMode(0); // 0 = FPS, 1 = MS
stats2.setMode(1); // 渲染时间 (MS)
stats3.setMode(2); // 内存使用情况
stats1.dom.id = 'stats1';
stats2.dom.id = 'stats2';
stats3.dom.id = 'stats3';
// 获取 id 为 content 的 div
const contentDiv1 = document.getElementById('jiankong1');
const contentDiv2 = document.getElementById('jiankong2');
const contentDiv3 = document.getElementById('jiankong3');
// 将它们添加到 DOM 中
contentDiv1.appendChild(stats1.dom);
contentDiv2.appendChild(stats2.dom);
contentDiv3.appendChild(stats3.dom);
stats1.dom.style.position = 'static';
stats2.dom.style.position = 'static';
stats3.dom.style.position = 'static';

// 动画循环
function animate() {
    // 更新物理世界
    // 更新物理世界（增大步长精度）
    world.step(1 / 120);

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
        // 更新摄像头高度
        if (globalCamera.position.y < minCameraHeight) {
            globalCamera.position.y = minCameraHeight; // 如果低于最小高度，则调整摄像头位置
        }
    }

    // 渲染场景
    stats1.begin();
    stats2.begin();
    stats3.begin();
    renderer.render(scene, activeCamera);
    stats1.end();
    stats2.end();
    stats3.end();
    requestAnimationFrame(animate);
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


// 定义箱型尺寸映射，增加缩小比例
const containerSizeMap = {
    "20": { width: 9.4, height: 11, depth: 24.4, bayOffset: 1 }, // 20 尺，缩小 5%
    "40": { width: 9.4, height: 11, depth: 48.8, bayOffset: 2 }, // 40 尺，缩小 5%
};
axios.defaults.withCredentials = true;
var AuthorizationValue;
var ZoneList;
var CommonAreaList;
var companyId = 47;
var loginId = 13918691207;
if (getQueryParam('companyId') != null) {
    companyId = getQueryParam('companyId');
}
if (getQueryParam('loginId') != null) {
    loginId = getQueryParam('loginId');
}


function getQueryParam(paramName) {
    const url = new URL(window.location.href); // 获取当前页面的 URL
    return url.searchParams.get(paramName); // 获取指定参数的值
}
await GetCompanyInfo(companyId, loginId);
await ZoneQuery();
await ZoneGetCommonArea();

//#region 箱区字体设置

const boxAreaFonttextMaterial = new THREE.MeshBasicMaterial({ color: 0xbb0800 });


const boxAreaFontoutlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide, // 白色描边
});
//#endregion

// 根据 JSON 绘制箱区
// 绘制箱区的网格
function drawContainerZoneGrid(zone, boxes) {
    const { X, Y, ZoneDirection, XDirection, YDirection, X1, Y1, Color, Name } = zone;

    const boxLength = 2.5 * 10; // 贝位的长边（箱位的宽度）
    const boxHeight = 10; // 排位的短边（箱位的高度）
    const gridColor = new THREE.Color(0xFFCC00 || Color); // 网格颜色

    // 起点坐标
    const startX = X1 || 0; // 起点 X 坐标
    const startZ = Y1 || 0; // 起点 Z 坐标（负值向下）

    const material = new THREE.MeshBasicMaterial({
        color: gridColor,
        opacity: 1, // 设置透明度（0是完全透明，1是完全不透明）
        transparent: true, // 使透明度生效
    });
    const lineWidth = 1; // 线条宽度（单位：米）
    const sceneLines = new THREE.Group(); // 创建一个组，方便管理网格线条
    // 计算方向因子
    let majorStep, minorStep;

    if (ZoneDirection === false) {
        // 水平布局
        majorStep = boxLength; // 贝位沿水平方向（列方向）
        minorStep = boxHeight; // 排位沿垂直方向（行方向）
        // 绘制横向线条（行）
        for (let row = 0; row <= Y; row++) {
            const z = startZ + row * minorStep;
            const xStart = startX;
            const xEnd = startX + X * majorStep;

            const lineLength = xEnd - xStart;
            const geometry = new THREE.BoxGeometry(lineLength + 1, lineWidth, 0.1);
            const line = new THREE.Mesh(geometry, material);
            line.position.set((xStart + xEnd) / 2, 0.1, z);
            line.rotation.x = Math.PI / 2;
            sceneLines.add(line);
        }

        // 绘制纵向线条（列）
        for (let col = 0; col <= X; col++) {
            const x = startX + col * majorStep;
            const zStart = startZ;
            const zEnd = startZ + Y * minorStep;

            const lineLength = zEnd - zStart;
            const geometry = new THREE.BoxGeometry(lineWidth, 0.1, lineLength + 1);
            const line = new THREE.Mesh(geometry, material);
            line.position.set(x, 0.1, (zStart + zEnd) / 2);
            sceneLines.add(line);
        }

    } else {
        // 垂直布局
        majorStep = boxHeight; // 行数沿垂直方向（行方向）
        minorStep = boxLength; // 列数沿水平方向（列方向）
        // 绘制横向线条（行）
        for (let row = 0; row <= X; row++) {
            const z = startZ + row * minorStep;
            const xStart = startX;
            const xEnd = startX + Y * majorStep;

            const lineLength = xEnd - xStart;
            const geometry = new THREE.BoxGeometry(lineLength + 1, lineWidth, 0.1);
            const line = new THREE.Mesh(geometry, material);
            line.position.set((xStart + xEnd) / 2, 0.1, z);
            line.rotation.x = Math.PI / 2;
            sceneLines.add(line);
        }

        // 绘制纵向线条（列）
        for (let col = 0; col <= Y; col++) {
            const x = startX + col * majorStep;
            const zStart = startZ;
            const zEnd = startZ + X * minorStep;

            const lineLength = zEnd - zStart;
            const geometry = new THREE.BoxGeometry(lineWidth, 0.1, lineLength + 1);
            const line = new THREE.Mesh(geometry, material);
            line.position.set(x, 0.1, (zStart + zEnd) / 2);
            sceneLines.add(line);
        }

    }
    scene.add(sceneLines);

    // 添加箱区名称标注
    if (Name) {
        var centerX;
        var centerZ;
        if (ZoneDirection === false) {
            centerX = startX + (X * majorStep) / 2;
            centerZ = startZ + (Y * minorStep) / 2;
        } else {
            centerX = startX + (Y * majorStep) / 2;
            centerZ = startZ + (X * minorStep) / 2;
        }


        loadFontOnce(function(font) {
                const boxAreaFonttextGeometry = new TextGeometry(Name, {
                    font: font,
                    size: 10, // 字体大小
                    height: 0.1, // 文字厚度
                });
                const boxAreaFontoutlineGeometry = new TextGeometry(Name, {
                    font: font,
                    size: 10,
                    height: 0.1,
                });
                const textMesh = new THREE.Mesh(boxAreaFonttextGeometry, boxAreaFonttextMaterial);
                const outlineMesh = new THREE.Mesh(boxAreaFontoutlineGeometry, boxAreaFontoutlineMaterial);

                // 调整描边宽度
                outlineMesh.scale.set(1.05, 1.05, 1.05);

                // 设置文字位置
                textMesh.position.set(centerX, 0.1, centerZ);
                outlineMesh.position.set(centerX, 0.1, centerZ);

                // 旋转文字
                textMesh.rotation.x = -Math.PI / 2;
                outlineMesh.rotation.x = -Math.PI / 2;

                scene.add(outlineMesh);
                scene.add(textMesh);
            },
            undefined,
            function(error) {
                console.error('字体加载失败', error);
            }
        );
    }
    // 找到对应的箱区的集装箱数据
    //区分40尺箱子与20尺箱子
    var boxes40 = [];
    var boxes20 = [];
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].ContainerType.startsWith("20")) {
            boxes20.push(boxes[i]);
        } else if (boxes[i].ContainerType.startsWith("40")) {
            boxes40.push(boxes[i]);
        }
    }
    //20尺箱子生成
    boxes20.forEach((box) => {
        createContainerWithText(box, zone);
    });
    var boxes40List = [];
    for (var i = 0; i < boxes40.length; i++) {
        var num = -1;
        for (var j = 0; j < boxes40List.length; j++) {
            if (boxes40List[j].CntrNo == boxes40[i].CntrNo) {
                num = j;
            }
        }
        if (num == -1) {
            boxes40[i].FX = [{ X: boxes40[i].X, Y: boxes40[i].Y }]
            boxes40List.push(boxes40[i]);
        } else {
            boxes40List[num].FX.push({ X: boxes40[i].X, Y: boxes40[i].Y });
        }
    }
    //console.log(boxes40List);
    boxes40List.forEach((box) => {
        createContainer40WithText(box, zone);
    });
}

// 创建 Canvas 绘制竖直文本
function createVerticalTextTexture(text, fontSize, canvasWidth, canvasHeight) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 增加 DPI 比例因子
    const dpiScale = 2; // 可以根据需要调整比例（如 2 倍或 3 倍）
    canvas.width = canvasWidth * dpiScale;
    canvas.height = canvasHeight * dpiScale;

    // 设置文本样式
    context.font = `${fontSize * dpiScale}px Arial`; // 增大字体尺寸来匹配更高的画布分辨率
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // 设置文本颜色为白色
    context.fillStyle = 'white';

    // 减小每个字符的垂直间距
    const offsetY = fontSize * dpiScale * 1.1; // 缩小间距，调整字符之间的距离
    let yPosition = offsetY;

    // 绘制竖直排列的字符
    for (let i = 0; i < text.length; i++) {
        context.fillText(text[i], canvas.width / 2, yPosition);
        yPosition += offsetY; // 增加 Y 轴偏移量，确保字符垂直排列
    }

    // 创建纹理，应用高 DPI 渲染结果
    const texture = new THREE.CanvasTexture(canvas);

    // 设置纹理过滤器，使其在缩小时不模糊
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    return texture;
}


// 创建集装箱的几何体和材质，带长面文字
function createContainerWithText(container, zone) {
    const { X, Y, Z, ContainerType, Color, CntrNo } = container;

    // 定义集装箱尺寸（比标准箱位稍小）
    const { width, height, depth } = containerSizeMap[ContainerType.substring(0, 2)] || containerSizeMap["20"];
    let rotationY = 0; // 默认不旋转
    let xPos;
    let yPos;
    let zPos;
    // 计算集装箱在箱区内的实际位置
    if (zone.ZoneDirection === false) {
        rotationY = Math.PI / 2; // 旋转 90 度
        if (zone.XDirection == false) {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (X - 1) * 25 + 12.5; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.Y - Y) * 10 + 5; // 排方向
            } else {
                xPos = zone.X1 + (X - 1) * 25 + 12.5; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (Y - 1) * 10 + 5; // 排方向
            }
        } else {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (zone.X - X) * 25 + 12.5; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.Y - Y) * 10 + 5; // 排方向
            } else {
                xPos = zone.X1 + (zone.X - X) * 25 + 12.5; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (Y - 1) * 10 + 5; // 排方向
            }
        }
    } else {

        if (zone.XDirection == false) {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (zone.Y - Y) * 10 + 5; // 排方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (X - 1) * 25 + 12.5; // 贝位方向
            } else {
                xPos = zone.X1 + (Y - 1) * 10 + 5; //排方向 

                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (X - 1) * 25 + 12.5; // 贝位方向
            }
        } else {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (zone.Y - Y) * 10 + 5; // 排方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.X - X) * 25 + 12.5; // 贝位方向
            } else {
                xPos = zone.X1 + (Y - 1) * 10 + 5; //排方向 
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.X - X) * 25 + 12.5; // 贝位方向
            }
        }
    }


    // 加载模型
    getModel('40box2', function(object) {

        // 获取模型的边界框
        const bbox = new THREE.Box3().setFromObject(object);
        const scaleX = width / (bbox.max.x - bbox.min.x);
        const scaleY = height / (bbox.max.y - bbox.min.y);
        const scaleZ = depth / (bbox.max.z - bbox.min.z);
        object.scale.set(scaleX, scaleY, scaleZ);


        // 调整模型的底部与地面对齐
        const bottomOffset = bbox.min.y * scaleY; // 底部偏移量
        const adjustedYPos = yPos - bottomOffset - 5.5; // 修正后的 Y 轴位置
        object.position.set(xPos, adjustedYPos, zPos);
        object.rotation.y = rotationY;
        object.code = CntrNo;
        object.IsBox = true;
        // 设置模型颜色
        object.traverse((child) => {
            if (child.isMesh) {
                if (child.name.includes('LBR')) {
                    // 设置该子组件的材质颜色
                    child.material.color.set(0xc6b7a4);
                } else {
                    child.material = new THREE.MeshStandardMaterial({
                        color: new THREE.Color(Color || '#ffffff'), // 取 `Color` 的值，默认白色
                    });
                }

            }
        });

        // 将模型添加到场景
        scene.add(object);

        // 创建物理体
        const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
        const body = new CANNON.Body({
            mass: 0, // 设置为静态物体
            position: new CANNON.Vec3(xPos, adjustedYPos, zPos),
            shape: shape,
        });
        body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotationY); // 设置旋转

        // 在每一帧中同步物理体与 Three.js 网格的旋转
        object.userData = { body: body };
        world.addBody(body);

        // 创建并显示箱号
        // loadFontOnce(function(font) {
        //     const textGeometry = new TextGeometry(CntrNo, {
        //         font: font,
        //         size: 0.5, // 字体大小
        //         height: 0.1, // 厚度
        //     });

        //     const textMesh = new THREE.Mesh(textGeometry, CntrNotextMaterial);

        //     // 计算文本的放置位置，使其贴在集装箱的两个长面
        //     const offsetX = (width / 2) + 1; // 稍微偏移，确保文字不与箱子重叠

        //     if (zone.ZoneDirection) {
        //         // 左侧面
        //         textMesh.position.set(xPos - offsetX + 1, adjustedYPos + height / 2 + 3, zPos + 6); // 左侧面
        //         textMesh.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         textMesh.rotation.x = Math.PI / 2; // 将文字旋转90度，使其竖直排列
        //         scene.add(textMesh);

        //         // 右侧面
        //         const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
        //         textMeshRight.position.set(xPos + offsetX - 1, adjustedYPos + height / 2 + 3, zPos - 6); // 右侧面
        //         textMeshRight.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         textMeshRight.rotation.x = Math.PI / 2; // 将文字旋转90度，使其竖直排列
        //         scene.add(textMeshRight);
        //     } else {
        //         // 左侧面
        //         textMesh.position.set(xPos - offsetX + 17, adjustedYPos + height / 2 + 3, zPos - 5); // 左侧面
        //         textMesh.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         textMesh.rotation.x = Math.PI / 2; // 将文字旋转90度，使其竖直排列
        //         scene.add(textMesh);

        //         // 右侧面
        //         const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
        //         textMeshRight.position.set(xPos + offsetX, adjustedYPos + height / 2 + 3, zPos + 5); // 右侧面
        //         textMeshRight.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         textMeshRight.rotation.x = Math.PI / 2; // 将文字旋转90度，使其竖直排列
        //         scene.add(textMeshRight);
        //     }
        // });


        const text = CntrNo; // 需要显示的文本
        const fontSize = 5; // 字体大小
        const canvasWidth = 200; // 画布宽度
        const canvasHeight = fontSize * text.length * 1.4; // 画布高度，确保能够容纳所有字符

        // 创建纹理
        const texture = createVerticalTextTexture(text, fontSize, canvasWidth, canvasHeight);

        // 创建一个带有纹理的材质
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true, // 设置材质为透明
        });



        if (zone.ZoneDirection) {
            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometry = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const plane = new THREE.Mesh(geometry, material);
            plane.position.set(xPos - 4.8, adjustedYPos + height / 2, zPos + 10);
            plane.rotation.y = rotationY - Math.PI / 2; // 与集装箱对齐
            scene.add(plane);

            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometryright = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const planeright = new THREE.Mesh(geometryright, material);
            planeright.position.set(xPos + 4.8, adjustedYPos + height / 2, zPos - 10);
            planeright.rotation.y = rotationY + Math.PI / 2; // 与集装箱对齐
            scene.add(planeright);
        } else {
            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometry = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const plane = new THREE.Mesh(geometry, material);
            plane.position.set(xPos + 10, adjustedYPos + height / 2, zPos + 4.8);
            plane.rotation.y = rotationY - Math.PI / 2; // 与集装箱对齐
            scene.add(plane);

            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometryright = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const planeright = new THREE.Mesh(geometryright, material);
            planeright.position.set(xPos - 10, adjustedYPos + height / 2, zPos - 4.8);
            planeright.rotation.y = rotationY + Math.PI / 2; // 与集装箱对齐
            scene.add(planeright);
        }
        // 将平面添加到场景中




        // 加载 Logo 图片并应用到材质
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('/img/logo.png', function(texture) {
            const logoMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
            if (zone.ZoneDirection) { // 左侧面 Logo
                const logoLeft = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoLeftMesh = new THREE.Mesh(logoLeft, logoMaterial);
                logoLeftMesh.position.set(xPos - (width / 2) + 9.6, adjustedYPos + height / 2, zPos - (depth / 2) + 12);
                logoLeftMesh.rotation.y = rotationY + Math.PI / 2;
                scene.add(logoLeftMesh);

                // 右侧面 Logo
                const logoRight = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoRightMesh = new THREE.Mesh(logoRight, logoMaterial);
                logoRightMesh.position.set(xPos + (width / 2) - 9.6, adjustedYPos + height / 2, zPos + (depth / 2) - 10);
                logoRightMesh.rotation.y = rotationY - Math.PI / 2;
                scene.add(logoRightMesh);
            } else {
                // 左侧面 Logo
                const logoLeft = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoLeftMesh = new THREE.Mesh(logoLeft, logoMaterial);
                logoLeftMesh.position.set(xPos - (width / 2) + 5, adjustedYPos + height / 2, zPos - (depth / 2) + 7.5);
                logoLeftMesh.rotation.y = rotationY + Math.PI / 2;
                scene.add(logoLeftMesh);

                // 右侧面 Logo
                const logoRight = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoRightMesh = new THREE.Mesh(logoRight, logoMaterial);
                logoRightMesh.position.set(xPos + (width / 2) - 5, adjustedYPos + height / 2, zPos + (depth / 2) - 7.5);
                logoRightMesh.rotation.y = rotationY - Math.PI / 2;
                scene.add(logoRightMesh);
            }

        });
    });
}



const modelCache = {}; // 用于缓存已经加载的模型
function getModel(modelName, callback) {
    if (modelCache[modelName]) {
        // 如果模型已经加载过，直接使用缓存
        callback(modelCache[modelName].clone());
    } else {
        // 如果模型没有加载过，从服务器加载
        const mtlLoader = new MTLLoader(); // 创建 MTLLoader 实例
        const objLoader = new OBJLoader();
        // 加载 MTL 文件
        mtlLoader.load('/3dmodel/' + modelName + '.mtl', function(materials) {
            materials.preload(); // 预加载材质

            // 设置 OBJLoader 使用加载的材质
            objLoader.setMaterials(materials);

            // 加载 OBJ 文件
            objLoader.load('/3dmodel/' + modelName + '.obj', function(object) {
                // 为每个子网格设置金属材质和反光效果
                object.traverse(function(child) {

                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0xcccccc, // 金属灰色
                            metalness: 0.4, // 金属度
                            roughness: 0.6, // 粗糙度（值越小越光滑）
                            envMap: scene.environment, // 设置环境贴图
                            envMapIntensity: 0.6, // 环境贴图反射强度
                            side: THREE.FrontSide, // 只渲染正面，背面不可见

                        });
                    }
                });
                modelCache[modelName] = object; // 缓存模型
                callback(object.clone()); // 返回一个克隆对象，避免多次引用同一实例
            });
        });

    }
}

// 缓存字体对象
let cachedFont = null;

// 加载字体并缓存
function loadFontOnce(callback) {
    if (cachedFont) {
        // 如果字体已经加载过，直接使用缓存的字体
        callback(cachedFont);
        return;
    }

    const loader = new FontLoader(); //'/font/FangSong_Regular.json'
    loader.load('/font/helvetiker_regular.typeface.json', function(font) {
        cachedFont = font; // 缓存字体
        callback(font); // 使用加载的字体执行回调
    });
}

// 创建一个缓存对象来存储已生成的文本纹理
const CntrNotextMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

function createContainer40WithText(container, zone) {
    var { X, Y, Z, ContainerType, Color, CntrNo, FX } = container;
    for (var i = 0; i < FX.length; i++) {
        if (X > FX[X]) {
            X = FX[X]
        }
        if (Y > FX[Y]) {
            Y = FX[Y]
        }
    }
    // 定义集装箱尺寸（比标准箱位稍小）
    const { width, height, depth } = containerSizeMap[ContainerType.substring(0, 2)] || containerSizeMap["20"];
    let rotationY = 0; // 默认不旋转
    let xPos;
    let yPos;
    let zPos;
    // 计算集装箱在箱区内的实际位置
    if (zone.ZoneDirection === false) {
        rotationY = Math.PI / 2; // 旋转 90 度
        if (zone.XDirection == false) {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (X - 1) * 25 + 25; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.Y - Y) * 10 + 5; // 排方向
            } else {
                xPos = zone.X1 + (X - 1) * 25 + 25; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (Y - 1) * 10 + 5; // 排方向
            }
        } else {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (zone.X - X) * 25; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.Y - Y) * 10 + 5; // 排方向
            } else {
                xPos = zone.X1 + (zone.X - X) * 25; // 贝位方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (Y - 1) * 10 + 5; // 排方向
            }
        }
    } else {
        if (zone.XDirection == false) {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (zone.Y - Y) * 10 + 5; // 排方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (X - 1) * 25 + 25; // 贝位方向
            } else {
                xPos = zone.X1 + (Y - 1) * 10 + 5; //排方向 

                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (X - 1) * 25 + 25; // 贝位方向
            }
        } else {
            if (zone.YDirection == false) {
                xPos = zone.X1 + (zone.Y - Y) * 10 + 5; // 排方向
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.X - X) * 25; // 贝位方向
            } else {
                xPos = zone.X1 + (Y - 1) * 10 + 5; //排方向 
                yPos = (Z - 1) * height + height / 2; // 层方向
                zPos = zone.Y1 + (zone.X - X) * 25; // 贝位方向
            }
        }
    }

    // 加载模型
    getModel('40box2', function(object) {


        // 获取模型的边界框
        const bbox = new THREE.Box3().setFromObject(object);
        const scaleX = width / (bbox.max.x - bbox.min.x);
        const scaleY = height / (bbox.max.y - bbox.min.y);
        const scaleZ = depth / (bbox.max.z - bbox.min.z);
        object.scale.set(scaleX, scaleY, scaleZ);


        // 调整模型的底部与地面对齐
        const bottomOffset = bbox.min.y * scaleY; // 底部偏移量
        const adjustedYPos = yPos - bottomOffset - 5.5; // 修正后的 Y 轴位置
        object.position.set(xPos, adjustedYPos, zPos);
        object.rotation.y = rotationY;
        object.code = CntrNo;
        object.IsBox = true;

        // 设置模型颜色
        object.traverse((child) => {
            if (child.isMesh) {

                if (child.name.includes('LBR')) {
                    // 设置该子组件的材质颜色为红色
                    child.material.color.set(0xc6b7a4); // 红色
                } else {
                    child.material = new THREE.MeshStandardMaterial({
                        color: new THREE.Color(Color || '#ffffff'), // 取 `Color` 的值，默认白色
                    });
                }

            }
        });
        // 将模型添加到场景
        scene.add(object);

        // 创建物理体
        const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
        const body = new CANNON.Body({
            mass: 0, // 设置为静态物体
            position: new CANNON.Vec3(xPos, adjustedYPos, zPos),
            shape: shape,
        });
        body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotationY); // 设置旋转

        // 在每一帧中同步物理体与 Three.js 网格的旋转
        object.userData = { body: body };
        world.addBody(body);

        // // 创建并显示箱号
        // loadFontOnce(function(font) {
        //     const textGeometry = new TextGeometry(CntrNo, {
        //         font: font,
        //         size: 0.5, // 字体大小
        //         height: 0.1, // 厚度
        //     });

        //     const textMesh = new THREE.Mesh(textGeometry, CntrNotextMaterial);

        //     // 计算文本的放置位置，使其贴在集装箱的两个长面
        //     const offsetX = (width / 2) + 1; // 稍微偏移，确保文字不与箱子重叠

        //     if (zone.ZoneDirection) {
        //         // 左侧面
        //         textMesh.position.set(xPos - offsetX + 1, adjustedYPos + height / 2 + 3, zPos + 18); // 左侧面
        //         textMesh.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         scene.add(textMesh);

        //         // 右侧面
        //         const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
        //         textMeshRight.position.set(xPos + offsetX - 1, adjustedYPos + height / 2 + 3, zPos - 18); // 右侧面
        //         textMeshRight.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         scene.add(textMeshRight);
        //     } else {
        //         // 左侧面
        //         textMesh.position.set(xPos - offsetX - 10, adjustedYPos + height / 2 + 3, zPos - 5); // 左侧面
        //         textMesh.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         scene.add(textMesh);

        //         // 右侧面
        //         const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
        //         textMeshRight.position.set(xPos + offsetX + 10, adjustedYPos + height / 2 + 3, zPos + 5); // 右侧面
        //         textMeshRight.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
        //         scene.add(textMeshRight);
        //     }

        // });


        const text = CntrNo; // 需要显示的文本
        const fontSize = 5; // 字体大小
        const canvasWidth = 200; // 画布宽度
        const canvasHeight = fontSize * text.length * 1.4; // 画布高度，确保能够容纳所有字符

        // 创建纹理
        const texture = createVerticalTextTexture(text, fontSize, canvasWidth, canvasHeight);

        // 创建一个带有纹理的材质
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true, // 设置材质为透明
        });



        if (zone.ZoneDirection) {
            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometry = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const plane = new THREE.Mesh(geometry, material);
            plane.position.set(xPos - 4.8, adjustedYPos + height / 2, zPos + 20);
            plane.rotation.y = rotationY - Math.PI / 2; // 与集装箱对齐
            scene.add(plane);

            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometryright = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const planeright = new THREE.Mesh(geometryright, material);
            planeright.position.set(xPos + 4.8, adjustedYPos + height / 2, zPos - 20);
            planeright.rotation.y = rotationY + Math.PI / 2; // 与集装箱对齐
            scene.add(planeright);
        } else {
            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometry = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const plane = new THREE.Mesh(geometry, material);
            plane.position.set(xPos + 20, adjustedYPos + height / 2, zPos + 4.8);
            plane.rotation.y = rotationY - Math.PI / 2; // 与集装箱对齐
            scene.add(plane);

            // 设置平面的位置
            // 创建一个平面并将纹理应用于此平面
            const geometryright = new THREE.PlaneGeometry(canvasWidth / 10, canvasHeight / 10);
            const planeright = new THREE.Mesh(geometryright, material);
            planeright.position.set(xPos - 20, adjustedYPos + height / 2, zPos - 4.8);
            planeright.rotation.y = rotationY + Math.PI / 2; // 与集装箱对齐
            scene.add(planeright);
        }

        // 加载 Logo 图片并应用到材质
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('/img/logo.png', function(texture) {
            const logoMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
            if (zone.ZoneDirection) { // 左侧面 Logo
                const logoLeft = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoLeftMesh = new THREE.Mesh(logoLeft, logoMaterial);
                logoLeftMesh.position.set(xPos - (width / 2) + 10, adjustedYPos + height / 2, zPos - (depth / 2) + 25);
                logoLeftMesh.rotation.y = rotationY + Math.PI / 2;
                scene.add(logoLeftMesh);

                // 右侧面 Logo
                const logoRight = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoRightMesh = new THREE.Mesh(logoRight, logoMaterial);
                logoRightMesh.position.set(xPos + (width / 2) - 10, adjustedYPos + height / 2, zPos + (depth / 2) - 20);
                logoRightMesh.rotation.y = rotationY - Math.PI / 2;
                scene.add(logoRightMesh);
            } else {
                // 左侧面 Logo
                const logoLeft = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoLeftMesh = new THREE.Mesh(logoLeft, logoMaterial);
                logoLeftMesh.position.set(xPos - (width / 2) + 5, adjustedYPos + height / 2, zPos - (depth / 2) + 19.5);
                logoLeftMesh.rotation.y = rotationY + Math.PI / 2;
                scene.add(logoLeftMesh);

                // 右侧面 Logo
                const logoRight = new THREE.PlaneGeometry(5, 5); // 根据实际情况调整大小
                const logoRightMesh = new THREE.Mesh(logoRight, logoMaterial);
                logoRightMesh.position.set(xPos + (width / 2) - 5, adjustedYPos + height / 2, zPos + (depth / 2) - 19.5);
                logoRightMesh.rotation.y = rotationY - Math.PI / 2;
                scene.add(logoRightMesh);
            }

        });
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // 返回一个在指定毫秒后 resolve 的 Promise
}



async function processZones() {
    for (var i = 0; i < ZoneList.rows.length; i++) {
        await delay(50); // 延迟 1000 毫秒（1秒）
        // 发起异步请求
        var boxZones = await ZoneQueryContainerInZoneCell(ZoneList.rows[i].Id);
        // 绘制容器网格
        drawContainerZoneGrid(ZoneList.rows[i], boxZones);
    }
}
processZones();




// 创建建筑物
function createBuildingsWithPhysics(data, scene, world) {
    data.forEach(building => {
        //围墙特殊处理
        if (building.Name == '围墙') {

        } else {
            // 计算建筑物的宽度、深度和中心位置
            if (building.High == 0 || building.High == null) {
                building.High = 3;
            }
            const width = building.X2 - building.X1; // X 方向宽度
            const depth = building.Y2 - building.Y1; // Y 方向深度
            const height = building.High * 5; // Z 方向高度
            const centerX = (building.X1 + building.X2) / 2;
            const centerZ = (building.Y1 + building.Y2) / 2;

            // 创建几何体
            const geometry = new THREE.BoxGeometry(width, height, depth);

            // 创建材质
            const material = new THREE.MeshLambertMaterial({
                color: new THREE.Color(building.Color), // 使用 JSON 中的颜色
                opacity: 1,
                transparent: true
            });

            // 创建网格
            const mesh = new THREE.Mesh(geometry, material);

            // 设置位置（y 轴为高度的一半）
            mesh.position.set(centerX, height / 2, centerZ);



            // 显示建筑物名称
            if (building.Name) {
                addTextToBuilding(mesh, building.Name);
            }
            // 添加到场景
            scene.add(mesh);
            // 添加物理碰撞体
            const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
            const body = new CANNON.Body({
                mass: 0, // 静态物体
                shape: shape,
                position: new CANNON.Vec3(centerX, height / 2, centerZ)
            });
            world.addBody(body);
        }
    });
}



function addTextToBuilding(building, text) {
    const boundingBox = new THREE.Box3().setFromObject(building);
    const width = boundingBox.max.x - boundingBox.min.x;
    const height = boundingBox.max.y - boundingBox.min.y;
    const depth = boundingBox.max.z - boundingBox.min.z;

    // 选择使用的 Web 字体
    const fontFamily = 'Noto Sans CJK'; // 可以替换为其他 Web 字体
    // 创建文字 Mesh 的辅助方法
    function createTextMesh(text, position, rotation) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '20px ' + fontFamily; // 使用 Web 字体
        const textWidth = ctx.measureText(text).width;
        const textHeight = 40; // 设定固定高度，字体大小

        // 设置画布大小
        canvas.width = textWidth;
        canvas.height = textHeight;

        // 渲染文字
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, textWidth * 0.3, textHeight * 0.8);



        // 创建纹理
        const texture = new THREE.CanvasTexture(canvas);

        // 创建一个平面，作为文本的展示面
        const geometry = new THREE.PlaneGeometry(textWidth, textHeight);

        // 创建一个材质，并应用纹理
        const textMesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
        textMesh.position.set(position.x, position.y, position.z);
        textMesh.rotation.set(rotation.x, rotation.y, rotation.z);

        // 计算文本几何体的包围盒
        geometry.computeBoundingBox();
        const textBoundingBox = geometry.boundingBox;

        // 调整文字的位置，使其居中
        const textOffsetX = -textBoundingBox.max.x / 2 - textBoundingBox.min.x / 2;
        const textOffsetY = -textBoundingBox.max.y / 2 - textBoundingBox.min.y / 2;
        textMesh.position.x += textOffsetX;
        textMesh.position.y += textOffsetY;

        return textMesh;
    }

    // 顶部文字（稍微向上调整）
    const topText = createTextMesh(text, { x: 0, y: height + 2, z: 0 }, { x: -Math.PI / 2, y: 0, z: 0 });
    building.add(topText);
}
// 遍历所有箱区并绘制
createBuildingsWithPhysics(CommonAreaList, scene, world);

//#region 获取数据
async function GetCompanyInfo(companyId, loginId) {
    try {
        // 发起请求
        const response = await axios.get('/Api/Backend/YAD/YardDashboard.ashx', {
            params: {
                act: 'GetCompanyInfo',
                companyId: companyId,
                loginId: loginId
            },
            withCredentials: true // 确保请求携带 cookies
        });

        // 打印响应结果
        //console.log(response.data); // 或者根据实际情况处理 response
        AuthorizationValue = response.data.token;
    } catch (error) {
        console.error('请求失败:', error);
    }
}

//获取箱区信息
async function ZoneQuery() {
    try {
        // 发起请求
        const response = await axios.get('/Api/Backend/YAD/YardDashboard.ashx', {
            params: {
                act: 'ZoneQuery'
            },
            headers: {
                Authorization: `${AuthorizationValue}` // 替换为实际的令牌
            },
            withCredentials: true // 确保请求携带 cookies
        });

        // 打印响应结果
        //console.log(response.data); // 或者根据实际情况处理 response
        ZoneList = response.data;
    } catch (error) {
        console.error('请求失败:', error);
    }
}


//获取公共区域信息
async function ZoneGetCommonArea() {
    try {
        // 发起请求
        const response = await axios.get('/Api/Backend/YAD/YardDashboard.ashx', {
            params: {
                act: 'ZoneGetCommonArea'
            },
            headers: {
                Authorization: `${AuthorizationValue}` // 替换为实际的令牌
            },
            withCredentials: true // 确保请求携带 cookies
        });

        // 打印响应结果
        //console.log(response.data); // 或者根据实际情况处理 response
        CommonAreaList = response.data;
    } catch (error) {
        console.error('请求失败:', error);
    }
}

//获取箱区内箱子信息
async function ZoneQueryContainerInZoneCell(Id) {
    try {
        // 发起请求
        const response = await axios.get('/Api/Backend/YAD/YardDashboard.ashx', {
            params: {
                act: 'ZoneQueryContainerInZoneCell',
                id: Id
            },
            headers: {
                Authorization: `${AuthorizationValue}` // 替换为实际的令牌
            },
            withCredentials: true // 确保请求携带 cookies
        });

        // 打印响应结果
        //console.log(response.data); // 或者根据实际情况处理 response
        return response.data;
    } catch (error) {
        console.error('请求失败:', error);
    }
}
//#endregion

scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
        object.frustumCulled = true; // 确保物体是剔除的
    }
});

// 监听搜索按钮点击事件
document.getElementById('searchBtn').addEventListener('click', function() {
    const boxNumber = document.getElementById("boxNumber").value;
    if (boxNumber) {
        filterContainersByCntrNo(boxNumber);
    }
});

// 监听取消按钮点击事件
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById("boxNumber").value = ""; // 清空输入框
    filterContainersByCntrNo("");
});
//TCLU6921870
function filterContainersByCntrNo(cntrNo) {
    scene.traverse((child) => {
        if (child.IsBox) {
            if (child instanceof THREE.Group) {
                child.children.forEach((subChild) => {
                    if (subChild instanceof THREE.Mesh && subChild.material) {
                        // 设置透明度
                        if (cntrNo && child.code !== cntrNo) {
                            subChild.material.transparent = true;
                            subChild.material.opacity = 0.3; // 变为半透明
                            subChild.material.needsUpdate = true; // 确保更新材质
                        } else {
                            subChild.material.transparent = true;
                            subChild.material.opacity = 1.0; // 正常显示
                            subChild.material.needsUpdate = true; // 确保更新材质
                        }
                    }
                });
            }

        }
    });
}