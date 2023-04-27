import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
// console.log(import.meta.env); node环境无法使用import.meta.env 去获取环境变量
// 需要使用 process.env  安装npm i --save-dev @types/node
// 使用 process.env 如果要获取.env.development文件下 需要使用loadEnv 这个包，结构需要更改
// export default defineConfig({
//   plugins: [vue()],
// })

// console.log(process.env);
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
console.log(pathResolve('types'));
console.log(pathResolve('src'));
console.log(fileURLToPath(new URL('./src', import.meta.url)));

export default ({ mode }: any) => {
  console.log('查看vite下的环境', mode);
  console.log(loadEnv(mode, process.cwd()));
  return defineConfig({
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
        //  exclue: ['./node_modules/**'],
        cache: false
      })
    ],
    resolve: {
      alias: [
        {
          // /#/符号定位到types目录下
          find: /\/#\//,
          replacement: `${pathResolve('types')}/`
        },
        {
          // @符号定位到src目录下
          find: '@',
          replacement: `${pathResolve('src')}/`
        }
      ]
      // alias: {
      //   '@': fileURLToPath(new URL('./src', import.meta.url))
      // }
    },
    // 给css预处理器配置bem
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/bem.scss";`
        }
      }
    }
  });
};
