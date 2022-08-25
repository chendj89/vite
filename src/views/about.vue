<script setup lang="ts">
import { inject, ref } from "vue";
import updateName from "@/dialog/updateName.vue";
await useDialog(updateName).then((res) => {
  console.log(res);
});
let state = inject("state");
let input = ref("");
</script>
<template>
  <div class="about">
    <div>434</div>
    <vp-btn></vp-btn>
    <vp-menu size="16" version="33"></vp-menu>
    <el-button type="primary" size="small" disabled>按钮01</el-button>
    <el-form>
      <el-input v-model="input"></el-input>
    </el-form>
  </div>
</template>

<style scoped>
.about {
  color: green;
}
</style>
