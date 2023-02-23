import { resolve } from 'node:path'
import pkg from '../editor/package.json'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import virtualHtml from 'vite-plugin-virtual-html'

export default defineConfig({
  define: {
    'process.env': {
      __VERSION__: pkg.version,
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    virtualHtml({
      pages: {
        index: '/public/index.html',
      },
    }),
  ],
  resolve: {
    alias: {
      '@guolao/vue-monaco-editor': resolve(__dirname, '../editor/src'),
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
})
