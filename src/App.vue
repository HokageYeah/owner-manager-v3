<template>
  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

console.log('哈哈哈哈====>', import.meta.env.VITE_API);
</script>

<style scoped></style>
