<template>
  <div class="yy-test">
    头部
    <div class="yy-test__input">测试一下</div>
    <btn type="success">成功</btn>
    <btn>失败</btn>
  </div>
</template>

<script setup lang="ts">
  import { h } from 'vue';

  interface Props {
    type?: 'success' | 'error';
  }
  const btn = (props: Props, ctx: any) => {
    return h(
      'button',
      {
        style: {
          backgroundColor: props.type === 'success' ? 'green' : 'red',
        },
        onClick: () => {
          console.log('点击里');
        },
      },
      ctx.slots.default(),
    );
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
