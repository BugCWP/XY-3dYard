import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshNormalMaterial()

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

cube.position.x = 10
cube.position.y = 5
cube.position.z = 3
cube.scale.set(2, 2, 3)
cube.rotation.x = Math.PI / 4

//scene.add(cube)


const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
)

camera.position.z = 18

const renderer = new THREE.WebGL1Renderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

renderer.setAnimationLoop(animation)
document.body.appendChild(renderer.domElement)

renderer.render(scene, camera)
const controls = new OrbitControls(camera, renderer.domElement)

function animation() {
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    renderer.render(scene, camera)
        //requestAnimationFrame(animation)
}
//animation()

const axesHelper = new THREE.AxesHelper(10)
    //scene.add(axesHelper)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
})

window.addEventListener('click', (event) => {

})

const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0xffffff)
gridHelper.material.transparent = true
gridHelper.material.opacity = 0.5
scene.add(gridHelper)

// 添加灯光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 环境光
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);



// 加载 .mtl 文件并应用到 .obj 模型
// const mtlLoader = new MTLLoader();
// mtlLoader.load('./3dmodel/box.mtl', (materials) => {
//     materials.preload(); // 预加载材质

//     const objLoader = new OBJLoader();
//     objLoader.setMaterials(materials); // 设置材质
//     objLoader.load(
//         './3dmodel/box.obj',
//         (object) => {
//             // 遍历模型的子对象并设置颜色
//             object.traverse((child) => {
//                 if (child.isMesh) {
//                     // 应用新材质
//                     child.material = new THREE.MeshStandardMaterial({
//                         color: 0xff0000, // 设置为红色
//                         metalness: 0.5, // 金属度
//                         roughness: 0.3, // 粗糙度
//                     });
//                 }
//             });
//             // 设置大小
//             object.scale.set(0.001, 0.001, 0.001); // 放大两倍
//             // 设置位置
//             object.position.set(0, 0, 0); // 移动到 (1, 1, 0)
//             // 加载成功时的回调
//             scene.add(object);
//         },
//         (xhr) => {
//             // 加载进度
//             console.log(`加载进度: ${(xhr.loaded / xhr.total) * 100}%`);
//         },
//         (error) => {
//             // 加载失败
//             console.error('OBJ 加载失败', error);
//         }
//     );
// });


// 加载 .glb 文件
const loader = new GLTFLoader();
loader.load(
    './3dmodel/box2.glb', // 替换为你的 .glb 文件路径
    (gltf) => {

        // 遍历模型的子对象并设置颜色
        // gltf.traverse((child) => {
        //     if (child.isMesh) {
        //         // 应用新材质
        //         child.material = new THREE.MeshStandardMaterial({
        //             color: 0xff0000, // 设置为红色
        //             metalness: 0.5, // 金属度
        //             roughness: 0.3, // 粗糙度
        //         });
        //     }
        // });
        // 模型加载成功
        const model = gltf.scene;
        model.scale.set(0.1, 0.1, 0.1); // 设置模型大小
        model.position.set(1, 1, 0); // 设置模型位置
        scene.add(model);
    },
    (xhr) => {
        // 加载进度
        console.log(`模型加载进度: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
        // 加载失败
        console.error('模型加载失败', error);
    }

);



// 添加地面
const planeGeometry = new THREE.PlaneGeometry(20, 20); // 平面宽度和高度
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080, // 灰色
    roughness: 1, // 表面粗糙
});
const ground = new THREE.Mesh(planeGeometry, planeMaterial);
ground.rotation.x = -Math.PI / 2; // 旋转90度，使平面水平
ground.position.y = 0; // 地面位置
scene.add(ground);

windowAddMouseWheel();
addTouchListener();

/**
 * 鼠标滚轮前进雨后退
 */
function windowAddMouseWheel() {
    var scrollFunc = function(e) {
        var positionZ = 0;
        e = e || window.event;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
            camera.position.z = camera.position.z + e.wheelDelta * 0.1;
            console.log(e.wheelDelta);
        } else if (e.detail) { //Firefox滑轮事件
            camera.position.z = camera.position.z + e.detail * 0.1;
            console.log(e.detail);
        }
        if (positionZ <= 1000 && positionZ >= 0.1) {
            camera.position.z = positionZ;
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
}

/**
 * 上下左右移动相机
 */
function addTouchListener() {
    var startX, endX, startY, endY;
    document.body.οnmοusedοwn = function(event) {
        startX = event.clientX;
        startY = event.clientY;

    };
    document.body.οnmοusemοve = function(event) {
        if (event.button == 1) {
            endX = event.clientX;
            endY = event.clientY;
            var x = endX - startX;
            var y = endY - startY;
            if (Math.abs(x) > Math.abs(y)) {
                camera.position.x = camera.position.x - x * 0.05;
            } else {
                camera.position.y = camera.position.y + y * 0.05;
            }
            startX = endX;
            startY = endY;
        }
    };
}

/**
 * 建筑物渲染
 */
function commonAreaRendering() {

}

/**
 * 堆场渲染
 */
function boxAreaRendering() {

}

/**
 * 堆场集装箱渲染
 */
function boxsRendering() {

}