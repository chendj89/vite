import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteVueMacro } from "./src/plugins/viteVueMacro";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
    viteVueMacro({
      useImport: `import useImport from "@/utils/useImport";`,
      useDialog: `import useDialog from "@/utils/useDialog";`,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
