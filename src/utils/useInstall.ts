import type { App } from "vue";
import { Component } from "@/types";
export default function useInstall(app: App, com: Component, opts?: any) {
  console.log(com);

  app.component("name", com);
}
