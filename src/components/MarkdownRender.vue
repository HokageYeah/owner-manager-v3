<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- tailwindcss:leading-7 控制行高为1.75rem -->
  <div v-html="html" class="markdown leading-7"> </div>
</template>

<script lang="ts">
  export default {
    name: 'MarkdownRender',
  };
</script>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  import DOMPurify from 'dompurify';
  import { marked } from 'marked';
  //   import mila from 'markdown-it-link-attributes'
  //   import MarkdownIt from 'markdown-it'
  import hljs from 'highlight.js';
  import mdInCode from './Incode';
  const props = defineProps({
    // 输入的 markdown 文本
    text: {
      type: String,
      default: '',
    },
    // 是否需要显示光标？比如在消息流结束后是不需要显示光标的
    showCursor: {
      type: Boolean,
      default: false,
    },
  });
  // 配置高亮
  marked.setOptions({
    highlight: function (code, lang) {
      try {
        if (lang) {
          return hljs.highlight(code, { language: lang }).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      } catch (error) {
        return code;
      }
    },
    gfmtrue: true,
    breaks: true,
  });

  // 计算最终要显示的 html 文本
  const html = computed(() => {
    // 将 markdown 转为 html
    function trans(text: string) {
      return DOMPurify.sanitize(marked.parse(text));
    }

    // 光标元素，可以用 css 美化成你想要的样子
    const cursor = '<span class="cursor"></span>';
    if (props.showCursor) {
      // 判断 AI 正在回的消息是否有未闭合的代码块。
      const inCode = mdInCode(props.text);
      if (inCode) {
        // 有未闭合的代码块，不显示光标
        return trans(props.text);
      } else {
        // 没有未闭合的代码块，将光标元素追加到最后。
        return trans(props.text + cursor);
      }
    } else {
      // 父组件明确不显示光标
      return trans(props.text);
    }
  });
</script>
<style scoped lang="scss"></style>
