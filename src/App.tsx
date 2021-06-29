/*
 * @Author: Sunly
 * @Date: 2021-06-28 18:50:59
 * @LastEditTime: 2021-06-28 19:27:22
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \moyoo\src\App.tsx
 */
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <h1>hello vue</h1>
        <RouterLink to="/">to home</RouterLink> |
        <RouterLink to="/about">to about</RouterLink>
        <RouterView />
      </>
    );
  },
});
