/*
 * @Author: Sunly
 * @Date: 2021-06-28 19:14:32
 * @LastEditTime: 2021-06-28 19:26:49
 * @LastEditors: Sunly
 * @Description: 路由
 * @FilePath: \moyoo\src\router\index.ts
 */
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
