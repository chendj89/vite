<script setup lang="ts">
import { get } from "http";
import { ref, computed } from "vue";
let arr = ref([1, 2, 3]);
let list = computed({
  get() {
    return arr.value;
  },
  set(value: number[]) {
    arr.value = value;
  },
});
</script>
<template>
  <div>更新名称</div>
</template>
<style scoped></style>
