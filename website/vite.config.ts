import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pkg from '../package.json';

const rootDir = resolve(__dirname, 'public')
const outDir = resolve(rootDir, '../dist')

export default defineConfig({
  base: './',
  root: rootDir,
  define: {
    'process.env': {
      __VERSION__: pkg.version,
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
})
