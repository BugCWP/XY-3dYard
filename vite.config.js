import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/Api/Backend': {
        target: 'https://user.xiang-cloud.com',  // 目标服务器地址
        changeOrigin: true,  // 修改请求头中的 Origin 字段
        secure: false,       // 如果目标是 HTTPS，设置为 false，防止自签名证书等问题
      }
    }
  }
});