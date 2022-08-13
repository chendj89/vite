import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import useInstall from "@/utils/useInstall";
import vpBtn from "@/components/vp-btn/index.vue";
import vpMenu from "@/components/vp-menu.vue";
const app = createApp(App);
useInstall(app, vpBtn, {
  msg: "👻👻👻👻",
});
useInstall(app, vpMenu, {
  msg: "🤡🤡🤡🤡",
});

app.use(router).mount("#app");
