import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './vite/',
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://shaobaitao.cn',
        ws: true,
      },
      '/ajax': {
        target: 'https://weibo.com',
        changeOrigin:true,
        https:true,
        ws: true,
      }
    },
  },
})


