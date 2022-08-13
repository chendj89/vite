<template>
  <div>按钮🦄</div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: () => "----",
  },
});
</script>

<style scoped></style>
