<template>
  <div>
    <div>vp-btn</div>
    <div>属性：{{ props.msg }}</div>
    <div>
      属性-主题：<span :style="{ color: props.theme }">{{ props.theme }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: () => "----",
  },
  theme: {
    type: String,
    default: () => "",
  },
});
</script>

<style scoped></style>
