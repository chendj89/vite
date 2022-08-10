import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import m1 from "./src/plugins/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    m1({
      params: {
        useImport: `import useImport from "@/utils/useImport.ts";`,
      },
    }),
  ],
});
