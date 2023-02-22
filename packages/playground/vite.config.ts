import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    createHtmlPlugin({
      minify: true,
      entry: "/src/main.ts",
      template: "/public/index.html",
    }),
  ],
  resolve: {
    alias: {
      "@guolao/vue-monaco-editor": resolve(__dirname, "../editor/src"),
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
});
