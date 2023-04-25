<template>
  <div class="yy-test">头部
    <div class="yy-test__input">测试一下</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss">
@include b(test) {
  color: red;
  font: {
    size: 18px;
    weight: bold;
  };
  @include e(input) {
    background-color: orange
  }
};
</style>
