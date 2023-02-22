import { resolve } from "node:path";
import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: "/src/main.ts",
      template: "/public/index.html",
    }),
  ],
  resolve: {
    alias: {
      "@guolao/vue-monaco-editor": resolve(__dirname, "../editor/src"),
      "vue-demi": resolve(__dirname, "./node_modules/vue-demi/lib/index.mjs"),
      vue: resolve(__dirname, "./node_modules/vue/dist/vue.runtime.esm.js"),
      "@vue/composition-api/dist/vue-composition-api.mjs": resolve(
        __dirname,
        "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs",
      ),
      "@vue/composition-api": resolve(
        __dirname,
        "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs",
      ),
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
});
