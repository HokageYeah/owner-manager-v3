// 测试代码
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
export type DynamicProps<T> = {
    [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
  };