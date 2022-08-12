<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
const route=useRoute();
console.log(route.meta);

const meta = reactive({
  title: "标题",
});
defineOptions({
  name: "00",
  log() {},
});
defineProps({
  msg: {
    default: () => "1",
  },
});
let a = 1;
a = 1 + 2;
useImport()
</script>
<template>
  <div>123</div>
</template>
<style lang="scss" scoped></style>
