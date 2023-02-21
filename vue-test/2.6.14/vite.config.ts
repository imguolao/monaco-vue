import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
      jsxOptions: {
        compositionAPI: true,
        injectH: true,
      }
    }),
    createHtmlPlugin({
      entry: './src/main.ts',
      template: './public/index.html'
    }),
  ],
})
