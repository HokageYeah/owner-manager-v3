import { createRouter, createWebHistory } from "vue-router"
import Layout from '@/layout/index.vue'
import { ElRef } from '/#/index';
import { App } from "vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    strict: true,
    routes: [
        {
            component: Layout,
            path: '/',
            children: []
        }
    ]
})
export function setupRouter (app: App) {
    app.use(router)
    // 创建路有守卫 待开发
}
export default router