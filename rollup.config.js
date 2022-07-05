import vue from "rollup-plugin-vue";

import typescript from "rollup-plugin-typescript2";
// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
// 代码压缩
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
// 使用 defineOptions 来定义 name、props 等组件属性
import DefineOptions from "unplugin-vue-define-options/rollup";
import alias from "@rollup/plugin-alias";
import path from "path";

const overrides = {
  compilerOptions: { declaration: true },
};

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es"
  },
  plugins: [
    nodeResolve(),
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    }),
    typescript({ tsconfigOverride: overrides }),
    DefineOptions(),
    vue(),
    postcss({
      extensions: [".css", ".less"],
      // 是否抽离 css 样式
      // extract: true,
      plugins: [autoprefixer()],
    }),
    commonjs({
      include: ["node_modules/**", "node_modules/**/*"],
    }),
    terser(),
  ],
  external: ["vue"],
};
