<script setup lang="ts">
import { reactive } from "vue";
//import useImport from "@/utils/useImport";
const meta = reactive({
  title: "标题",
});
defineOptions({
  name: "Foo",
  inheritAttrs: false,
});
useImport("222");
</script>
<template>
  <div>123</div>
</template>
<style lang="scss" scoped></style>
