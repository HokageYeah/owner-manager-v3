<template>
  <p>hellow world</p>
  <button @click="sayHello">say hello</button>
  <button @click="onClickXhrGetError">xhr异常请求-get</button>
  <button @click="onClickFetchPostError"> Fetch异常请求-post</button>
</template>
<script setup lang="ts">
  const props = defineProps<{ msg: String }>();
  const sayHello = () => {
    // eslint-disable-next-line no-alert
    console.log('hello ssr' + props.msg);
    console.log('点击报错');
    const a = {};
    // @ts-ignore
    a.split('/');
  };
  const onClickXhrGetError = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/api/getList2?test=123');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log('xhr-res', xhr.responseText);
      }
    };
  };
  const onClickFetchPostError = () => {
    fetch('http://localhost:8080/api/setList2', {
      method: 'POST',
      body: JSON.stringify({ test: '测试请求体' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res)
      .then((res) => {
        console.log('featch-res', res);
      });
  };
</script>

<style scoped></style>
