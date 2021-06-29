/*
 * @Author: Sunly
 * @Date: 2021-06-28 18:50:59
 * @LastEditTime: 2021-06-28 19:24:39
 * @LastEditors: Sunly
 * @Description: Main
 * @FilePath: \moyoo\src\main.ts
 */
import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
