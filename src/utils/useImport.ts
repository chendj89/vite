export default function useImport(name?: string) {
  console.log(name + "🤡");
}

declare global {
  /**
   * 导入小丑00
   * @param name
   */
  function useImport(name?: string): void;
}
export function useName() {}
