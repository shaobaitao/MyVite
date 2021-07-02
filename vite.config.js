import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path/posix'
var path = require("path")
// https://vitejs.dev/config/


export default defineConfig({
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
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/style/themes/variables.less')}";`,
        },
        
        javascriptEnabled: true,
      }
    }
  },
})


