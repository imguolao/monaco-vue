import { resolve } from "node:path";
import pkg from "../editor/package.json";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  define: {
    "process.env": {
      __VERSION__: pkg.version,
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
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
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
});
