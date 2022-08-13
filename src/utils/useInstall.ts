import type { App } from "vue";
import { Component } from "@/types";
export default function useInstall(app: App, com: Component, opts: any = {}) {
  for (const [attr, value] of Object.entries(opts)) {
    if (com.props[attr]) {
      com.props[attr].default = () => value;
    }
  }
  let __file = <string>com.__file;
  let reg: RegExp | string = "";
  if (__file.includes("index.vue")) {
    reg = /([\w-]*)\/index.vue/;
  } else {
    reg = /([\w-]*)\.vue/;
  }
  let res = __file.match(reg);
  if (res) {
    app.component(res[1], com);
  } else {
    console.error(`组件注册失败,文件：${com.__file}`);
  }
}
