import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pkg from '../package.json';

export default defineConfig({
  base: './',
  root: resolve(__dirname, 'public'),
  define: {
    'process.env': {
      __VERSION__: pkg.version,
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@hooks': resolve(__dirname, '../src/hooks'),
      '@components': resolve(__dirname, '../src/components'),
      '@utils': resolve(__dirname, '../src/utils'),
    },
  },
})
