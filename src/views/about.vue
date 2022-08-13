<script setup lang="ts">
import updateName from "@/dialog/updateName.vue";
import { log } from "console";
await useDialog(updateName).then((res) => {
  console.log(res);
});
</script>
<template>
  <div class="about">
    <div>434</div>
    <vp-btn></vp-btn>
    <vp-menu></vp-menu>
  </div>
</template>

<style scoped>
.about {
  color: green;
}
</style>
