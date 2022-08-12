export default function useDialog(file?: string) {
  console.log(file + "👻");
}

declare global {
  /**
   * 使用对话框
   * @param file
   */
  function useDialog(file?: string): void;
}
