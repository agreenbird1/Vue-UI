## AFanTi UI

实现了Button、message消息提示框、confirm确认组件、dialog对话框以及notification五个简单的组件

项目使用 vue3 + ts + rollup进行打包和实现，采取es模块导出，并不兼容vue2

### Notification

注意，Notification只支持函数式调用

| 属性      | 说明                       | 类型    | 可选值                                      | 默认值    |
| --------- | -------------------------- | ------- | ------------------------------------------- | --------- |
| type      | 通知框类型                 | String  | warning/error/success/info                  | info      |
| title     | 通知框头部                 | string  | -                                           | -         |
| message   | 通知框文字                 | string  | -                                           | -         |
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



### Confirm 

注意，confirm只支持函数式调用，若希望进行组件式调用、使用插槽，请使用 Dialog 组件。

同时Confirm函数返回一个 `Promise`，你可以通过成功失败的回调判断用户的操作。

```vue
<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { confirm } from "@juexiao/AFanTi-UI";
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



### Message

注意，Message只支持函数式调用

#### Message 消息提示框属性

| 属性 | 说明       | 类型   | 可选值                | 默认值 |
| ---- | ---------- | ------ | --------------------- | ------ |
| type | 提示框类型 | string | warning/error/success | middle |
| text | 提示框文字 | string | -                     | -      |


