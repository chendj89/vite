import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import vpBtn from "@/components/vp-btn/index.vue";

const app = createApp(App);
vpBtn.props.msg.default = () => "👻👻👻👻";
console.log(vpBtn.name);

app.use(router).mount("#app");
