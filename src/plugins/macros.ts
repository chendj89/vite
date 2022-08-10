import { createUnplugin } from "unplugin";

export const unplugin = createUnplugin((options: any) => {
  return {
    name: "my-first-unplugin",
    // webpack's id filter is outside of loader logic,
    // an additional hook is needed for better perf on webpack
    transformInclude(id) {
      return id.endsWith(".vue");
    },
    // just like rollup transform
    transform(code) {
      return code.replace(/<template>/, `<template><div>Injected</div>`);
    },
    // more hooks coming
  };
});

export const vitePlugin = unplugin.vite;
export const rollupPlugin = unplugin.rollup;
export const webpackPlugin = unplugin.webpack;
export const esbuildPlugin = unplugin.esbuild;
