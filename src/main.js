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

globalCamera.position.set(1200, 500, 1800);
globalCamera.lookAt(1000, 0, 1000); // 让摄像机指向地图中心
globalCamera.updateProjectionMatrix();

// 当前激活的摄像头
let activeCamera = globalCamera;

// 初始化渲染器
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild(renderer.domElement);

// 添加光照
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // 柔和的环境光
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 平行光
directionalLight.position.set(10, 10, 10); // 设置光源方向
scene.add(directionalLight);

// 加载 HDR 文件
const rgbeLoader = new RGBELoader();
rgbeLoader.load('./public/textures/sunflowers_puresky_4k.hdr', (texture) => {
    // 设置纹理的映射方式
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // 将 HDR 纹理应用为场景背景
    scene.background = texture;

    // 设置场景的环境光源
    scene.environment = texture;
});

// 加载纹理
const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load('./public/textures/4K-concrete_41.jpg-diffuse.jpg');
// 设置纹理的平铺模式
groundTexture.wrapS = THREE.RepeatWrapping; // 水平方向重复
groundTexture.wrapT = THREE.RepeatWrapping; // 垂直方向重复
groundTexture.repeat.set(500, 500); // 设置纹理的平铺次数（10x10）

// 地面：左上角为 (0, 0, 0)
const groundSize = 1000; // 增大地面大小
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
orbitControls.enableDamping = false; // 启用惯性效果
orbitControls.dampingFactor = 0.05;
orbitControls.screenSpacePanning = true; // 启用平移
orbitControls.enableZoom = true; // 启用缩放
orbitControls.minDistance = 50; // 最小缩放距离
orbitControls.maxDistance = 1500; // 限制最大缩放距离，确保视角不会太远

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

// 动画循环
function animate() {
    requestAnimationFrame(animate);

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


/**
 * json文件读取
 */
function getJson(dataName) {
    $.ajaxSettings.async = false; //设为同步请求
    var data = $.getJSON(dataName);
    $.ajaxSettings.async = true; //设为异步请求
    return data.responseJSON;
}
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

// 根据 JSON 绘制箱区
// 绘制箱区的网格
function drawContainerZoneGrid(zone, boxes) {
    const { X, Y, ZoneDirection, XDirection, YDirection, X1, Y1, Color, Name } = zone;

    const boxLength = 2.5 * 10; // 贝位的长边（箱位的宽度）
    const boxHeight = 10; // 排位的短边（箱位的高度）
    const gridColor = new THREE.Color(Color || 0xFFFFFF); // 网格颜色

    const lineMaterial = new THREE.LineBasicMaterial({
        color: gridColor,
        linewidth: 20, // 设置线条宽度
        opacity: 0.6, // 设置透明度（0是完全透明，1是完全不透明）
        transparent: true // 使透明度生效
    });
    const lineGeometry = new THREE.BufferGeometry();
    const vertices = [];

    // 起点坐标
    const startX = X1 || 0; // 起点 X 坐标
    const startZ = Y1 || 0; // 起点 Z 坐标（负值向下）

    // 计算方向因子
    let majorStep, minorStep;

    if (ZoneDirection === false) {
        // 水平布局
        majorStep = boxLength; // 贝位沿水平方向（列方向）
        minorStep = boxHeight; // 排位沿垂直方向（行方向）

        // 绘制横向线条（行）
        for (let row = 0; row <= Y; row++) { // Y 控制行数

            const z = startZ + row * minorStep;
            const xStart = startX;
            const xEnd = startX + X * majorStep;
            vertices.push(xStart, 0.1, z, xEnd, 0.1, z);
        }

        // 绘制纵向线条（列）
        for (let col = 0; col <= X; col++) { // X 控制列数
            const x = startX + col * majorStep;
            const zStart = startZ;
            const zEnd = startZ + Y * minorStep;
            vertices.push(x, 0.1, zStart, x, 0.1, zEnd);

        }

    } else {
        // 垂直布局
        majorStep = boxHeight; // 行数沿垂直方向（行方向）
        minorStep = boxLength; // 列数沿水平方向（列方向）

        //绘制横向线条（行）
        for (let row = 0; row <= X; row++) { // Y 控制行数
            const z = startZ + row * minorStep;
            const xStart = startX;
            const xEnd = startX + Y * majorStep;
            vertices.push(xStart, 0.1, z, xEnd, 0.1, z);
        }

        //绘制纵向线条（列）
        for (let col = 0; col <= Y; col++) { // X 控制列数
            const x = startX + col * majorStep;
            const zStart = startZ;
            const zEnd = startZ + X * minorStep;
            vertices.push(x, 0.1, zStart, x, 0.1, zEnd);
        }


    }



    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const gridLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(gridLines);

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
                const textGeometry = new TextGeometry(Name, {
                    font: font,
                    size: 10, // 字体大小
                    height: 0.1, // 文字厚度
                });

                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xbb0800 });
                const outlineGeometry = new TextGeometry(Name, {
                    font: font,
                    size: 10,
                    height: 0.1,
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
    getModel('40box', function(object) {


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
        loadFontOnce(function(font) {
            const textGeometry = new TextGeometry(CntrNo, {
                font: font,
                size: 2, // 字体大小
                height: 0.1, // 厚度
            });

            const textMesh = new THREE.Mesh(textGeometry, CntrNotextMaterial);



            // 计算文本的放置位置，使其贴在集装箱的两个长面
            const offsetX = (width / 2) + 1; // 稍微偏移，确保文字不与箱子重叠

            if (zone.ZoneDirection) {
                // 左侧面
                textMesh.position.set(xPos - offsetX + 1, adjustedYPos + height / 2 - 2, zPos - 8); // 左侧面
                textMesh.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMesh);

                // 右侧面
                const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
                textMeshRight.position.set(xPos + offsetX - 1, adjustedYPos + height / 2 - 2, zPos + 8); // 右侧面
                textMeshRight.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMeshRight);
            } else {
                // 左侧面
                textMesh.position.set(xPos - offsetX + 13, adjustedYPos + height / 2 - 2, zPos - 5); // 左侧面
                textMesh.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMesh);

                // 右侧面
                const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
                textMeshRight.position.set(xPos + offsetX - 13, adjustedYPos + height / 2 - 2, zPos + 5); // 右侧面
                textMeshRight.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMeshRight);
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
        mtlLoader.load('./public/3dmodel/' + modelName + '.mtl', function(materials) {
            materials.preload(); // 预加载材质

            // 设置 OBJLoader 使用加载的材质
            objLoader.setMaterials(materials);

            // 加载 OBJ 文件
            objLoader.load('./public/3dmodel/' + modelName + '.obj', function(object) {
                // 为每个子网格设置金属材质和反光效果
                object.traverse(function(child) {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0xcccccc, // 金属灰色
                            metalness: 0.9, // 金属度
                            roughness: 0.1, // 粗糙度（值越小越光滑）
                            envMap: scene.environment, // 设置环境贴图
                            envMapIntensity: 1.0, // 环境贴图反射强度
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

    const loader = new FontLoader();
    loader.load('./public/font/FangSong_Regular.json', function(font) {
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
    getModel('40box', function(object) {


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

        // 创建并显示箱号
        loadFontOnce(function(font) {
            const textGeometry = new TextGeometry(CntrNo, {
                font: font,
                size: 2, // 字体大小
                height: 0.1, // 厚度
            });

            const textMesh = new THREE.Mesh(textGeometry, CntrNotextMaterial);

            // 计算文本的放置位置，使其贴在集装箱的两个长面
            const offsetX = (width / 2) + 1; // 稍微偏移，确保文字不与箱子重叠

            if (zone.ZoneDirection) {
                // 左侧面
                textMesh.position.set(xPos - offsetX + 1, adjustedYPos + height / 2 - 2, zPos - 8); // 左侧面
                textMesh.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMesh);

                // 右侧面
                const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
                textMeshRight.position.set(xPos + offsetX - 1, adjustedYPos + height / 2 - 2, zPos + 8); // 右侧面
                textMeshRight.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMeshRight);
            } else {
                // 左侧面
                textMesh.position.set(xPos - offsetX + 13, adjustedYPos + height / 2 - 2, zPos - 5); // 左侧面
                textMesh.rotation.y = rotationY + Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMesh);

                // 右侧面
                const textMeshRight = new THREE.Mesh(textGeometry, CntrNotextMaterial);
                textMeshRight.position.set(xPos + offsetX - 13, adjustedYPos + height / 2 - 2, zPos + 5); // 右侧面
                textMeshRight.rotation.y = rotationY - Math.PI / 2; // 确保文字朝向平行于箱子的长边
                scene.add(textMeshRight);
            }

        });
    });
}


// 创建叠加文字的材质
function createTextMaterial(text, baseColor) {
    const canvas = document.createElement("canvas");
    canvas.width = 512; // 宽度设置为较小值以保证高分辨率
    canvas.height = 128;
    const context = canvas.getContext("2d");

    // 设置背景颜色（保留原来的颜色）
    context.fillStyle = baseColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 设置文字样式并绘制
    context.font = "64px Arial"; // 更小的文字尺寸
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white"; // 白色文字
    context.fillText(text, canvas.width / 2, canvas.height / 2); // 居中绘制文字

    // 创建纹理
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    // 返回材质
    return new THREE.MeshBasicMaterial({ map: texture });


}



// 调用辅助工具
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

// const axesHelper = new THREE.AxesHelper(50);
// scene.add(axesHelper);

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

        // 每次循环等待 1 秒钟

    }
}
processZones();




// 创建建筑物
function createBuildingsWithPhysics(data, scene, world) {
    data.forEach(building => {
        // 计算建筑物的宽度、深度和中心位置
        if (building.High == 0) {
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
            opacity: 0.7,
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
    });
}

function addTextToBuilding(building, text) {

    loadFontOnce(function(font) {
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textGeometryOptions = {
            font: font,
            size: 10, // 固定文字大小为 10
            height: 0.2, // 文字厚度
            curveSegments: 12, // 曲线细分度
        };

        // 获取建筑物的包围盒
        const boundingBox = new THREE.Box3().setFromObject(building);
        const width = boundingBox.max.x - boundingBox.min.x;
        const height = boundingBox.max.y - boundingBox.min.y;
        const depth = boundingBox.max.z - boundingBox.min.z;

        // 创建文字 Mesh 的辅助方法
        function createTextMesh(text, position, rotation) {
            const textGeometry = new TextGeometry(text, textGeometryOptions);

            // 手动计算文字的包围盒，用于调整位置
            textGeometry.computeBoundingBox();
            const textBoundingBox = textGeometry.boundingBox;

            const textHeight = textBoundingBox.max.y - textBoundingBox.min.y; // 文字高度

            // 调整文字位置，使其水平和垂直居中
            position.y -= textHeight / 2; // 垂直居中

            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(position.x, position.y, position.z);
            textMesh.rotation.set(rotation.x, rotation.y, rotation.z);
            return textMesh;
        }

        // 顶部文字（稍微向上调整）
        const topText = createTextMesh(text, { x: 0, y: height, z: 0 }, { x: -Math.PI / 2, y: 0, z: 0 });
        building.add(topText);

        // 前侧文字
        const frontText = createTextMesh(text, { x: 0, y: 0, z: depth / 2 + 0.2 }, { x: 0, y: 0, z: 0 });
        building.add(frontText);

        // 后侧文字
        const backText = createTextMesh(text, { x: 0, y: 0, z: -depth / 2 - 0.2 }, { x: 0, y: Math.PI, z: 0 });
        building.add(backText);

        // 左侧文字
        const leftText = createTextMesh(text, { x: -width / 2 - 0.2, y: 0, z: 0 }, { x: 0, y: Math.PI / 2, z: 0 });
        building.add(leftText);

        // 右侧文字
        const rightText = createTextMesh(text, { x: width / 2 + 0.2, y: 0, z: 0 }, { x: 0, y: -Math.PI / 2, z: 0 });
        building.add(rightText);
    });
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
//CMAU9290902
function filterContainersByCntrNo(cntrNo) {
    scene.traverse((child) => {
        if (child.IsBox) {
            if (child instanceof THREE.Group) {
                child.children.forEach((subChild) => {
                    if (subChild instanceof THREE.Mesh && subChild.material) {
                        // 设置透明度
                        if (cntrNo && child.code !== cntrNo) {
                            subChild.material.transparent = true;
                            subChild.material.opacity = 0.1; // 变为半透明
                        } else {
                            subChild.material.transparent = false;
                            subChild.material.opacity = 1.0; // 正常显示
                        }
                    }
                });
            }

        }
    });
}