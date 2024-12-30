// vite.config.js
export default {
    base: '/', // 确保这里是部署时的根路径
    build: {
        target: 'esnext', // 使用 esnext 目标，支持顶级 await
        esbuild: {
            target: 'esnext', // 同样设置 esbuild 目标为 esnext
        },
        minify: false // 禁用文件压缩
    },
    server: {
        headers: {
            'Cache-Control': 'public, max-age=31536000',  // 强制文件缓存
          },
        proxy: {
            '/Api/Backend': {
                target: 'https://user.xiang-cloud.com',
                changeOrigin: true, // 更改来源为目标的地址
                secure: false // 如果目标是 https，可以关闭证书验证
            },
        }
    },
};