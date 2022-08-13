<script setup lang="ts">
useImport("22");
</script>
<template>
  <div>
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'menu' }">menu</router-link>
  </div>
</template>
<style lang="scss" scoped></style>
