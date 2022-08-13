<script setup lang="ts">
import updateName from "@/dialog/updateName.vue";
import { log } from "console";
console.log(1);
await useDialog(updateName).then((res) => {
  console.log(res);
});
console.log(2);
</script>
<template>
  <div class="about">434</div>
</template>

<style scoped>
.about {
  color: green;
}
</style>
