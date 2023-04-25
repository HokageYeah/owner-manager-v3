
1、css采用sass + bem架构的方式布局
================================

1） 配置 SCSS 预处理器

2） 在每个 SCSS 文件中自动导入 bem.scss 文件，从而可以在项目的任何 SCSS 文件中直接使用 bem.scss 中定义的混入、变量

3）Vite.config.ts中关于scss文件配置

```shell
// 从 'vite' 包中导入 defineConfig 函数
import { defineConfig } from 'vite'

// 从 '@vitejs/plugin-vue' 包中导入 Vue 插件
import vue from '@vitejs/plugin-vue'

// 使用 defineConfig 函数来定义 Vite 配置
// 参考文档: https://vitejs.dev/config/
export default defineConfig({
    // 将 Vue 插件添加到插件数组中
    plugins: [vue()],
    
    // 配置 CSS 预处理器选项
    css: {
        preprocessorOptions: {
            // 配置 scss 预处理器选项
            scss: {
                // 在所有 scss 文件中自动导入 'src/bem.scss' 文件
                additionalData: "@import './src/bem.scss';"
            }
        }
    }
})
```
  
