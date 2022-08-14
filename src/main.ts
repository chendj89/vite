import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import useInstall from "@/utils/useInstall";
import vpBtn from "@/components/vp-btn/index.vue";
import vpMenu from "@/components/vp-menu.vue";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
app.use(ElementPlus, { size: "small" });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
useInstall(app, vpBtn, {
  msg: "👻👻👻👻",
});
useInstall(app, vpMenu, {
  msg: "🤡🤡🤡🤡",
});

app.use(router).mount("#app");
