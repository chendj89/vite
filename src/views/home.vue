<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const AsyncComp = defineAsyncComponent(() => import("./vp-tool.vue"));
useImport("22");
useToolNum("00");
</script>
<template>
  <div>
    <AsyncComp></AsyncComp>
    <div v-num="{ color: 'white', text: 'hello!' }">123</div>
  </div>
</template>
<style lang="scss" scoped></style>
