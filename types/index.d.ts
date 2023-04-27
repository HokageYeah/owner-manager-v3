/* eslint-disable no-unused-vars */
// 测试代码
import { Ref, ComputedRef, Nullable } from 'vue';

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
};

export type Ns = number;
