/*
 * @Author: Sunly
 * @Date: 2021-06-28 18:50:59
 * @LastEditTime: 2021-06-28 19:19:42
 * @LastEditors: Sunly
 * @Description: vite 配置
 * @FilePath: \moyoo\vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
});
