<template>
  <p>hellow world</p>
  <button @click="sayHello">say hello</button>
</template>
<script setup lang="ts">
const sayHello = () => {
  // eslint-disable-next-line no-alert
  alert('hello ssr');
};
</script>

<style scoped></style>
