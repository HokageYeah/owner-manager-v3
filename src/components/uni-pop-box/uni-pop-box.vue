<template>
  <div v-if="flag" id="confirm">
    <div class="contents">
      <div class="contents-top">{{ title }}</div>
      <div class="contents-center">{{ msg }}</div>
      <div class="contents-bottom">
        <button class="left" @click="show">{{ btn.ok }}</button>
        <button class="right" @click="hide">{{ btn.no }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  type btntype = {
    ok: string;
    no: string;
  };
  const props = withDefaults(
    defineProps<{
      title: string;
      msg: string;
      btn: btntype;
    }>(),
    {
      title: '标题',
      msg: '这是一个信息弹出框组件',
      btn: (): btntype => {
        return {
          ok: '确定',
          no: '取消',
        };
      },
    },
  );

  const flag = ref(true);
  const show = () => {
    flag.value = false;
  };

  const hide = () => {
    flag.value = false;
  };
  defineExpose({
    show,
    hide,
  });
</script>

<style scoped lang="scss">
  #confirm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    .contents {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 200px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      &-top {
        font-size: 20px;
        font-weight: 700;
        color: #333;
        text-align: center;
        line-height: 40px;
      }
      &-center {
        font-size: 14px;
        font-weight: 400;
        color: #333;
        text-align: center;
        line-height: 40px;
      }
      &-bottom {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 40px;
        border-top: 1px solid #eee;
        .left,
        .right {
          width: 100px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 0 10px 10px 0;
          border: 1px solid #eee;
          background-color: orange;
          color: #333;
          cursor: pointer;
        }
      }
    }
  }
</style>
