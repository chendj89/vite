import { DEFINE_OPTIONS, isCallOf } from "./common";
import type { SFCScriptBlock } from "@vue/compiler-sfc";
import type { CallExpression, Node, ObjectExpression } from "@babel/types";

export const filterMarco = (scriptSetup: SFCScriptBlock) => {
  // 解析ast
  // 判断ast是否有宏

  return scriptSetup
    .scriptSetupAst!.map((raw: Node) => {
      let node = raw;
      // 表达式,
      if (raw.type === "ExpressionStatement") {
        // console.log(raw.expression)
        node = raw.expression;
      }
      // 判断是否有defineOptions
      return isCallOf(node, DEFINE_OPTIONS) ? node : undefined;
    }) //过滤
    .filter((node): node is CallExpression => !!node);
};

// ObjectProperty 属性
// ObjectMethod 方法
/**
 * 判断参数中是否有属性名为props或者方法为emits
 * @param node 
 * @returns 
 */
export const hasPropsOrEmits = (node: ObjectExpression) =>
  node.properties.some((prop) => {
    return (
      (prop.type === "ObjectProperty" || prop.type === "ObjectMethod") &&
      prop.key.type === "Identifier" &&
      (prop.key.name === "props" || prop.key.name === "emits")
    );
  });
