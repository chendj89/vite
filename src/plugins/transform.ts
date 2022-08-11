import { MagicString, compileScript } from "@vue/compiler-sfc";
import { DEFINE_OPTIONS, checkInvalidScopeReference, parseSFC } from "./common";
import { filterMarco, hasPropsOrEmits } from "./utils";

export const transform = (
  code: string,
  id: string,
  params?: any
): MagicString | undefined => {
  let s: MagicString = new MagicString(code);
  //if (!code.includes(DEFINE_OPTIONS)) return;

  const sfc = parseSFC(code, id);
  // 判断是否setup模式
  if (!sfc.scriptSetup) return;
  if (!sfc.scriptSetup.scriptSetupAst) {
    // 转换为编译模式-解析
    sfc.scriptSetup = compileScript(sfc, {
      id,
    });
  }
  // 脚本  setup脚本
  const { script, scriptSetup } = sfc;
  // script=null

  const startOffset = scriptSetup.loc.start.offset;

  // 找到指定 宏
  const nodes = filterMarco(scriptSetup);

  if (nodes.length === 0) {
    return;
  } else if (nodes.length > 1) {
    // 判断是否重复定义了 defineProps
    throw new SyntaxError(`duplicate ${DEFINE_OPTIONS}() call`);
  }
  
  // 判断是否有常规脚本，抛出错误
  if (script)
    throw new SyntaxError(
      `${DEFINE_OPTIONS} cannot be used, with both script and <script setup>.`
    );
  // 取出defineProps的ast
  const [node] = nodes;
  // 取出传参
  const [arg] = node.arguments;

  // 必须是个对象
  if (!(node.arguments.length === 1 && arg.type === "ObjectExpression")) {
    throw new SyntaxError(`${DEFINE_OPTIONS}() arguments error,传参错误,只能传递1个对象`);
  }
  // console.log(arg);
  // 判断参数中是否有属性名为props或者方法为emits
  if (hasPropsOrEmits(arg)) {
    throw new SyntaxError(
      `${DEFINE_OPTIONS}() please use defineProps or defineEmits instead. 参数中不能有 属性props和emits`
    );
  }
  // 不懂
  checkInvalidScopeReference(arg, DEFINE_OPTIONS, scriptSetup);
  // 获得参数文本
  // {
  //   name: "00",
  //   log() {},
  // }
  const argText = code.slice(startOffset + arg.start!, startOffset + arg.end!);
  // 获得语法方式
  const lang = scriptSetup.attrs.lang
    ? ` lang="${scriptSetup.attrs.lang}"`
    : "";
 
  // 头部追加
  s.prepend(
    `<script${lang}>
import { defineComponent as DO_defineComponent } from 'vue';
${params.useImport}
console.log('-_-');
export default /*#__PURE__*/ DO_defineComponent(${argText});
</script>\n`
  );
  // console.log(s.toString());

  let t1=s.remove(startOffset + node.start!, startOffset + node.end!);
  // console.log(s.toString());
  return s;
};
