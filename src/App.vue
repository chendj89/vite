<script setup lang="ts">
import { RefreshRight } from "@element-plus/icons-vue";
import { provide, reactive, watch, ref, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
let route = useRoute();
let router = useRouter();
const state = reactive({
  routes: [
    {
      name: "home",
      fullPath: "/",
    },
  ] as any[],
});
const reload = ref(true);
watch(
  route,
  (val) => {
    let h = state.routes.some((item) => {
      return item.fullPath === val.fullPath;
    });
    if (!h && val.name) {
      state.routes.push({
        name: val.name,
        fullPath: val.fullPath,
      });
    }
  },
  { deep: true }
);
provide("state", state);
const tabClick = (pane: any) => {
  let index = pane.index;
  let re = state.routes[index];
  if (route.fullPath !== re.fullPath) {
    router.push(re.name);
  }
};
const reloadFun = () => {
  reload.value = false;
  nextTick(() => {
    reload.value = true;
  });
};
</script>

<template>
  <Suspense>
    <div>
      <el-tabs type="card" @tab-click="tabClick" :closable="true">
        <el-tab-pane
          v-for="item in state.routes"
          :key="item.fullPath"
          :label="item.name"
        ></el-tab-pane>
      </el-tabs>
      <el-row>
        <el-col :span="4">
          <el-button
            type="danger"
            :icon="RefreshRight"
            circle
            @click="reloadFun"
        /></el-col>
      </el-row>
      <router-link :to="{ name: 'about' }">about</router-link>
      <router-link :to="{ name: 'menu' }">menu</router-link>
      <router-link :to="{ name: 'home' }">home</router-link>
      <router-view v-if="reload"></router-view>
    </div>
  </Suspense>
</template>

<style lang="scss" scoped></style>
