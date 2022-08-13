import { Component } from "@/types";
// type File<T extends string> = `${T}.vue`;
export default function useDialog(file: Component, opts?: any) {
  return new Promise((resolve) => {
    return resolve(true);
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
