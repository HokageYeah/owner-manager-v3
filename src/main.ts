import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router, { setupRouter } from '@/router';
import webMonitor from '@web-monitor/vue3';
import popBox from './components/uni-pop-box/pop-box';

async function bootstrap() {
  const app = createApp(App);
  await setupRouter(app);
  // 路由准备就绪后挂载APP实例
  await router.isReady();

  app.use(webMonitor, {
    dsn: 'http://localhost:8080/api/reportData',
    appName: '测试vue3',
    isRecordScreen: true,
    isHttpError: true,
    afterSendData: (data) => {
      console.log('我是发送后的钩子函数回调了-----', data);
      // @ts-ignore
      if (window.getAllMonitorList) {
        // @ts-ignore
        window.getAllMonitorList();
      }
    },
    beforeSendData: (data) => {
      console.log('我是发送前面的钩子函数回调了-----', data);
    },
  });

  app.use(popBox, { title: '哈哈哈哈哈', msg: '那是贷记卡接口连接科林斯多久' });
  app.mount('#app', true);
}
void bootstrap();
