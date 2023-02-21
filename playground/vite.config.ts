import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: './',
  root: resolve(__dirname, 'public'),
  plugins: [
    vue(),
    vueJsx(),
  ],
})
