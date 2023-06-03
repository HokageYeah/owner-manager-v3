<template>
  <p>hellow world</p>
  <button @click="sayHello">say hello</button>
</template>
<script setup lang="ts">
  const props = defineProps<{ msg: String }>();
  const sayHello = () => {
    // eslint-disable-next-line no-alert
    console.log('hello ssr' + props.msg);
  };
</script>

<style scoped></style>
