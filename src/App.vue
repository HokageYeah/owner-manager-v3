<template>
  <HelloWorld msg="Vite + Vue" />
  <MarkdownRender
    text="打上了大舅萨卡大舅阿斯利康大舅阿斯利康大舅阿斯科利大舅开始了,```<div>sdsd</div>```"
    :showCursor="true"
  />
  <br />
  <router-view />
</template>

<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import MarkdownRender from './components/MarkdownRender.vue';
  console.log('哈哈哈哈====>', import.meta.env.VITE_API);
</script>

<style scoped></style>
