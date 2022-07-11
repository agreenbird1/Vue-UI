<template>
  <button class="button" :class="[size, type]">
    <!-- 左侧可以放置图标 -->
    <slot name="icon" />
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "AftButton",
};
</script>
<script setup lang="ts">
interface IProps {
  size?: "mini" | "small" | "middle" | "large";
  type?: "default" | "plain" | "primary" | "gray";
}
withDefaults(defineProps<IProps>(), {
  size: "middle",
  type: "default",
});
</script>

<style scoped lang="less">
.button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}
.plain {
  border-color: #27ba9b;
  color: #27ba9b;
  background: lighten(#27ba9b, 50%);
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
