## AFanTi UI

实现了Button、message消息提示框、confirm确认组件、dialog对话框以及notification注意框和skeleton骨架等简单的组件。

项目使用 vue3 + ts + rollup进行打包和实现，采取es模块导出，支持全局引入和单独引入（标注函数式调用的组件只能单独引入使用！），并不兼容vue2。
同时使用jest等完成组件测试，语句覆盖率达90%。


```vue
// 单独引入
<template>
  <div>
      <Skeleton width="200px"></Skeleton>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from "@juexiao/juexiao-AFanTi-UI";
</script>
```



```typescript
// 全局引入
// main.ts
import AFTUi from "@juexiao/juexiao-AFanTi-UI";

createApp(App).use(AFTUi).mount("#app");
```



### notify

注意，notify只支持函数式调用

| 属性      | 说明                       | 类型    | 可选值                                      | 默认值    |
| --------- | -------------------------- | ------- | ------------------------------------------- | --------- |
| type      | 通知框类型                 | String  | warning/error/success/info                  | info      |
| title     | 通知框头部文字             | string  | -                                           | -         |
| text      | 通知框内容文字             | string  | -                                           | -         |
| duration  | 通知框停留时间             | number  | -                                           | 4500 ms   |
| offset    | 通知框距离当前最近边的距离 | number  | -                                           | 16        |
| position  | 通知框的位置               | string  | top-right/top-left/bottom-right/bottom-left | top-right |
| showClose | 是否显示关闭按钮           | boolean | true/false                                  | false     |



### Dialog

是confirm组件的升级，支持插槽等更多功能。

#### Dialog 对话框属性

| 属性       | 说明             | 类型    | 可选值     | 默认值   |
| ---------- | ---------------- | ------- | ---------- | -------- |
| title      | 提示框头部信息   | string  | -          | 温馨提示 |
| text       | 提示框具体信息   | string  | -          | -        |
| showClose  | 是否显示关闭按钮 | boolean | true/false | false    |
| modelValue | 控制dialog的显示 | boolean | true/false | false    |
| isModal    | 是否显示遮罩层   | boolean | true/false | true     |



#### Dialog 插槽

| 插槽名  | 说明                         |
| ------- | ---------------------------- |
| header  | 头部插槽，替代title          |
| default | 默认插槽，内容体             |
| footer  | 底部插槽，默认是确认取消按钮 |



#### Dialog 事件

| 事件名        | 说明              | 参数 |
| :------------ | :---------------- | :--- |
| openDialog    | Dialog 打开的回调 | —    |
| closeDialog   | Dialog 关闭的回调 | —    |
| confirmDialog | 点击确定的回调    | —    |
| cancelDialog  | 点击取消的回调    | —    |



### Skeleton

| 属性     | 说明             | 类型    | 可选值     | 默认值   |
| -------- | ---------------- | ------- | ---------- | -------- |
| bg       | 显示的背景颜色   | string  | -          | \#efefef |
| width    | 骨架宽度         | string  | -          | 100px    |
| height   | 骨架高度         | string  | -          | 100px    |
| animated | 是否显示闪光动画 | boolean | true/false | true     |



### Button

#### Button 按钮属性

| 属性 | 说明     | 类型   | 可选值                     | 默认值  |
| ---- | -------- | ------ | -------------------------- | ------- |
| size | 按钮大小 | string | large/middle/small/mini    | middle  |
| type | 按钮样式 | string | gray/plain/primary/default | default |

#### Button 插槽

| 插槽名 | 说明               | 子标签 |
| ------ | ------------------ | ------ |
| icon   | button的自定义icon | 无     |



### confirm 

注意，confirm只支持函数式调用，若希望进行组件式调用、使用插槽，请使用 Dialog 组件。

同时Confirm函数返回一个 `Promise`，你可以通过成功失败的回调判断用户的操作。

```vue
<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { confirm } from "@juexiao/juexiao-AFanTi-UI";
confirm({
    title:"test",
    text:"test text"
}).then(
    res => console.log("confirm"),
    rej => console.log("cancel"),
)
</script>

```



#### Comfirm 确认提示框属性

| 属性  | 说明           | 类型   | 可选值 | 默认值   |
| ----- | -------------- | ------ | ------ | -------- |
| title | 提示框头部信息 | string | -      | 温馨提示 |
| text  | 提示框具体信息 | string | -      | -        |



### message

注意，message只支持函数式调用

#### message 消息提示框属性

| 属性 | 说明       | 类型   | 可选值                | 默认值 |
| ---- | ---------- | ------ | --------------------- | ------ |
| type | 提示框类型 | string | warning/error/success | middle |
| text | 提示框文字 | string | -                     | -      |