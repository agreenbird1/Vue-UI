<template>
  <transition>
    <div
      v-if="modelValue"
      class="dialog"
      :class="{
        modal: isModal,
      }"
    >
      <div class="wrapper">
        <div class="header">
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
          <a v-if="showClose" @click="close" style="text-decoration: none">
            ×
          </a>
        </div>
        <div class="body">
          <slot>
            <span>{{ text }}</span>
          </slot>
        </div>
        <div class="footer">
          <slot name="footer">
            <MyButton size="mini" type="gray" @click="cancel">取消</MyButton>
            &nbsp;
            <MyButton size="mini" type="primary" @click="confirm">
              确认
            </MyButton>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import MyButton from "../Button/index.vue";

interface IProps {
  title: string;
  text: string;
  showClose?: boolean; // 是否显示关闭按钮
  modelValue: boolean;
  isModal?: boolean; // 显示遮罩层
}

// 必传参数无默认值
withDefaults(defineProps<IProps>(), {
  showClose: false,
  isModal: true,
});
const emits = defineEmits([
  "closeDialog",
  "cancelDialog",
  "confirmDialog",
  "openDialog",
  "update:modelValue",
]);
defineOptions({
  name: "Dialog",
});

// 关闭
const close = () => {
  emits("closeDialog");
  emits("update:modelValue", false);
};
// 取消
const cancel = () => {
  emits("cancelDialog");
  emits("update:modelValue", false);
};
// 确认
const confirm = () => {
  emits("confirmDialog");
  emits("update:modelValue", false);
};

onMounted(() => {
  emits("openDialog");
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

.modal {
  background: rgba(0, 0, 0, 0.5);
}

.dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;

  .wrapper {
    width: 400px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
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
      color: #000;
      h3 {
        font-weight: normal;
        font-size: 18px;
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
        cursor: pointer;

        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>
