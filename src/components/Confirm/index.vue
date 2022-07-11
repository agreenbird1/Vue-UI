<template>
  <transition>
    <div class="confirm" v-if="visible">
      <div class="wrapper">
        <div class="header">
          <h3>{{ title }}</h3>
        </div>
        <div class="body">
          <span>{{ text }}</span>
        </div>
        <div class="footer">
          <MyButton size="mini" type="gray" @click="cancel">取消</MyButton>
          &nbsp;
          <MyButton size="mini" type="primary" @click="confirm">
            确认
          </MyButton>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import MyButton from "../Button/index.vue";

interface IProps {
  title?: string;
  text?: string;
  pcancel?: () => void;
  pconfirm?: () => void;
}

const props = withDefaults(defineProps<IProps>(), {
  title: "温馨提示",
  text: "",
});
// 控制显示以及隐藏
const visible = ref(false);
onMounted(() => {
  visible.value = true;
});
// 取消
const cancel = () => {
  props.pcancel && props.pcancel();
};
// 确认
const confirm = () => {
  props.pconfirm && props.pconfirm();
};
</script>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AFT-Confirm",
});
</script>

<style scoped lang="less">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0.5);
  .wrapper {
    width: 400px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .header,
    .footer {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
    }
    .body {
      padding: 20px 40px;
      font-size: 16px;
      span {
        color: #666;
      }
    }
    .footer {
      text-align: right;
      .xtx-button {
        margin-left: 20px;
      }
    }
    .header {
      position: relative;

      h3 {
        font-weight: normal;
        font-size: 18px;
        color: #000;
      }
      a {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>
