<template>
  <transition name="fade">
    <div class="message" :style="style[type]" v-show="show">
      <!-- 上面绑定的是样式 -->
      <!-- 不同提示图标会变 -->
      <!-- 使用 component 的方式无法使组件生效，被rollup默认的tree shaking删除掉了 -->
      <error v-if="type === 'error'"></error>
      <warning v-if="type === 'warning'"></warning>
      <success v-if="type === 'success'"></success>
      <span
        class="text"
        :style="{
          color: style[type].color,
        }"
        >&nbsp;{{ text }}</span
      >
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import error from "../Svgs/error.vue";
import warning from "../Svgs/warning.vue";
import success from "../Svgs/success.vue";
defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "warning",
    value: ["warning", "error", "success"],
  },
});

const show = ref(false);
onMounted(() => {
  show.value = true;
});

// 定义一个对象，包含三种情况的样式，对象key就是类型字符串
const style = {
  warning: {
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  error: {
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
  success: {
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
};
</script>

<script lang="ts">
export default {
  name: "AftMessage",
};
</script>

<style scoped lang="less">
.message {
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  border-radius: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-from {
  transform: translate3d(0, -75px, 0);
  opacity: 0;
}
.fade-enter-to {
  transform: none;
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
