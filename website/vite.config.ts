import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pkg from '../package.json';

const rootDir = resolve(__dirname, 'public')
const outDir = resolve(rootDir, '../dist')

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? './' : './',
    root: rootDir,
    define: {
      'process.env': {
        __VERSION__: pkg.version,
      },
    },
    build: {
      outDir,
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
  };
})
