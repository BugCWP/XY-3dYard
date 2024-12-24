// vite.config.js
export default {
    server: {
        proxy: {
            '/Api/Backend': {
                target: 'https://user.xiang-cloud.com',
                changeOrigin: true, // 更改来源为目标的地址
                secure: false // 如果目标是 https，可以关闭证书验证
            },
        },
    },
};