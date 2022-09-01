<script setup lang="ts">
import { inject, ref,defineAsyncComponent,getCurrentInstance } from "vue";
import updateName from "@/dialog/updateName.vue";
let ins = getCurrentInstance();
let state = inject("state");
let input = ref("");

let click = () => {
  const AsyncComp = defineAsyncComponent(
    () => import("@/pop/top.vue")
  );

   useDialog.call(ins, AsyncComp);
};
</script>
<template>
  <div class="about">
    <div>434</div>
    <vp-btn @click="click"></vp-btn>
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
