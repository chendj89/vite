<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
const route=useRoute();
console.log(route.meta);

const meta = reactive({
  title: "标题",
});

</script>
<template>
  <div>123</div>
</template>
<style lang="scss" scoped></style>
