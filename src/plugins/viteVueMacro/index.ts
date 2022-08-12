import { createUnplugin } from "unplugin";
import {
  MagicString,
  compileScript,
  parse,
  walkIdentifiers,
} from "@vue/compiler-sfc";
import type { SFCDescriptor, SFCScriptBlock } from "@vue/compiler-sfc";
import type { CallExpression, Node, ObjectExpression } from "@babel/types";
export const unplugin = createUnplugin((options: any) => {
  return {
    name: "viteVueMacro",
    enforce: "pre",
    transformInclude(id) {
      return id.endsWith(".vue");
    },
    transform(code, id) {
      try {
        const s = transform(code, id, options);
        if (!s) {
          return;
        }
        return {
          code: s.toString(),
          get map() {
            return s.generateMap();
          },
        };
      } catch (error) {
        this.error(`viteVueMacro发生错误：${error}`);
      }
    },
  };
});

export const viteVueMacro = unplugin.vite;
export const rollupVueMacro = unplugin.rollup;
export const webpackVueMacro = unplugin.webpack;
export const esbuildVueMacro = unplugin.esbuild;

/**
 * 转换为sfc模式
 * @param code
 * @param id
 * @returns
 */
function parseSFC(code: string, id: string) {
  const { descriptor } = parse(code, { filename: id });
  return descriptor;
}

function transform(code: string, id: string, params?: any) {
  // 判空
  if (!params || !Object.keys(params).length) {
    return;
  }
  let tpl = [];
  for (const [key, value] of Object.entries(params)) {
    if (code.includes(key)) {
      tpl.push(value);
    }
  }
  console.log(tpl);
  if (!tpl.length) {
    return;
  }

  // sfc模式
  const sfc = parseSFC(code, id);
  // 判断是否为setup模式
  if (!sfc.scriptSetup) {
    return;
  }

  // 判断是否有ast
  if (!sfc.scriptSetup.scriptSetupAst) {
    // 转换ast
    sfc.scriptSetup = compileScript(sfc, { id });
  }

  // 普通脚本script setup脚本
  const { script, scriptSetup } = sfc;
  if (script) {
    throw new SyntaxError(`宏定义必须在<script setup>中`);
  }
  // 获得语法方式
  const lang = scriptSetup.attrs.lang
    ? ` lang="${scriptSetup.attrs.lang}"`
    : "";
  let s: MagicString = new MagicString(code);
  s.prepend(`<script${lang}>
${tpl.join(";\n")}
</script>\n`);
  return s;
}
