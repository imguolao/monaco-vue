import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // dts({
    //   include: [
    //     'src/**/*.ts', 
    //     'src/**/*.d.ts', 
    //     'src/**/*.tsx', 
    //     'src/**/*.vue',
    //   ],
    //   outputDir: 'lib',
    // }),
    createHtmlPlugin({
      minify: true,
      entry: './playground/src/main.ts',
      template: './playground/public/index.html',
    })
  ],
  resolve: {
    alias: {
      '@monaco-editor/vue': resolve(__dirname, './src'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
    }
  }
})
