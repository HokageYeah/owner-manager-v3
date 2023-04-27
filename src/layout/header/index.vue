<template>
  <div class="yy-test">
    头部
    <div class="yy-test__input">测试一下</div>
    <btn />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';

const btn = () => {
  return h('button', () => {}, '点击');
};
</script>
<style scoped lang="scss">
@include b(test) {
  color: red;
  font: {
    size: 18px;
    weight: bold;
  }
  @include e(input) {
    background-color: orange;
  }
}
</style>
