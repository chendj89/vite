<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: () => "----",
  },
});
/**
 * 按钮
 */
let size: number = 15;
defineExpose({
  /**
   * @description 哈哈
   */
  size: size,
});
</script>
<template>
  <div>
    <div>vp-menu</div>
    <div>{{ props.msg }}</div>
  </div>
</template>
<style scoped></style>
