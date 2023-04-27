/// <reference types="vite/client" />

// 扩充自带文件的声明提示，提示.env.development的VITE_API
// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
  VITE_API: string;
}
