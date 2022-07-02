import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createHtmlPlugin({
      minify: true,
      entry: '../website/src/main.ts',
      template: '../website/public/index.html',
    }),
  ],
  resolve: {
    alias: {
      '@hooks': resolve(__dirname, '../src/hooks'),
      '@components': resolve(__dirname, '../src/components'),
      '@utils': resolve(__dirname, '../src/utils'),
    },
  },
})
