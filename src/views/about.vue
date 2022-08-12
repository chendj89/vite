<script setup lang="ts">
import updateName from "@/content/updateName.vue";
import { log } from "console";

useDialog(updateName).then((res) => {
  console.log(res);
});
</script>
<template>
  <div class="about">434</div>
</template>

<style scoped>
.about {
  color: green;
}
</style>
