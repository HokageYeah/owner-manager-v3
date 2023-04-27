import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router, { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App);
  await setupRouter(app);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
  app.mount('#app', true);
}
bootstrap();
