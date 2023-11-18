import { createVNode, render } from 'vue';
import PopBoxCompoents from './uni-pop-box.vue';

// vue3创建一个挂载全局的组件
const popBox = {
  install: (app: any, options: any) => {
    // const popBoxInstance = app.mount(document.createElement('div'));
    // // 将组件实例挂载到页面上
    // document.body.appendChild(popBoxInstance.$el);
    // createVNode vue提供的底层方法 可以给我们组件创建一个虚拟DOM 也就是Vnode
    const popBoxVNode = createVNode(PopBoxCompoents, options);
    // render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
    render(popBoxVNode, document.body);
    // Vue 提供的全局配置 可以自定义
    app.config.globalProperties.$loading = {
      show: () => popBoxVNode.component?.exposed?.show(),
      hide: () => popBoxVNode.component?.exposed?.hide(),
    };
  },
};

export default popBox;
