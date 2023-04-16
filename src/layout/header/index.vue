<template>
    <div id="resize">头部</div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped lang='less'>
// Css3 新增属性 resize 需要配合overflow使用
#resize {
    border: 1px solid red;
    resize: both;
    overflow: hidden;
}
</style>