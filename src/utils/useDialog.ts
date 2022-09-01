import { Component } from "@/types";
// type File<T extends string> = `${T}.vue`;
import {
  App,
  createApp,
  getCurrentInstance,
  markRaw,
  defineAsyncComponent,
} from "vue";
export default function useDialog(file: Component) {
  // @ts-ignore
  let ins: any = getCurrentInstance() || this;
  return new Promise((resolve, reject) => {
    // 服务器渲染
    if (typeof document !== "undefined") {
      let container = document.createElement("div");
      let app: any = createApp(file, {
        myVer: "-",
        remove: (result: any = true) => {
          app.unmount();
          container.parentNode?.removeChild(container);
          resolve(result);
        },
      });
      app._context.components = ins.appContext.app._context.components;
      app._context.directives = ins.appContext.app._context.directives;
      app._context.mixins = ins.appContext.app._context.mixins;
      app._context.provides = ins.appContext.app._context.provides;
      app.config.globalProperties = ins.appContext.config.globalProperties;
      app.mount(container);
      document.body.appendChild(container);
    }
  });
}

declare global {
  /**
   * 使用对话框
   * @param file
   * @param {Object} opts
   */
  function useDialog(file: Component, opts?: any): Promise<any>;
}
