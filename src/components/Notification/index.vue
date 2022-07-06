<template>
  <transition>
    <div
      class="notification"
      v-show="visible"
      :style="{
        ...styles[position],
        ...styles[type],
        [position.split('-')[0]]: offset + 'px',
        [position.split('-')[1]]: 16 + 'px',
        zIndex: zIndex + 'px',
      }"
    >
      <div class="header">
        <span>{{ title }}</span>
        <span v-show="showClose" class="close" @click="close()">×</span>
      </div>
      <div class="content">
        <error v-if="type === 'error'"></error>
        <warning v-if="type === 'warning'"></warning>
        <success v-if="type === 'success'"></success>
        <info v-if="type === 'info'"></info>
        &nbsp; &nbsp; &nbsp;
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import error from "../Svgs/error.vue";
import warning from "../Svgs/warning.vue";
import success from "../Svgs/success.vue";
import info from "../Svgs/info.vue";

export default defineComponent({
  name: "Notification",
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 4500,
    },
    offset: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      value: ["top-right", "top-left", "bottom-right", "bottom-left"],
      default: "top-right",
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      value: ["info", "warning", "success", "error"],
      default: "info",
    },
    id: {
      type: Number,
    },
    onClose: {
      type: Function,
    },
    zIndex: {
      type: Number,
    },
  },
  components: {
    error,
    warning,
    success,
    info,
  },
  setup(props) {
    const visible = ref(false);
    const styles = {
      error: {
        backgroundColor: "rgb(254, 240, 240)",
        border: "1px solid rgb(253, 226, 226)",
        boxShadow: "0px 0px 12px rgb(219, 63, 92, 0.2)",
      },
      warning: {
        backgroundColor: "rgb(253, 246, 236)",
        border: "1px solid rgb(250, 236, 216)",
        boxShadow: "0px 0px 12px rgb(233, 246, 122, 0.2)",
      },
      success: {
        backgroundColor: "rgb(240, 249, 235)",
        border: "1px solid rgb(225, 243, 216)",
        boxShadow: "0px 0px 12px rgb(76, 230, 86, 0.2)",
      },
      info: {
        backgroundColor: "#fff",
        border: "1px solid 1px solid #ddd",
        boxShadow: "0px 0px 12px rgb(0, 0, 0, 0.2)",
      },
    };
    const close = () => {
      if (props.onClose) {
        props.onClose();
      }
    };
    onMounted(() => (visible.value = true));
    return {
      styles,
      visible,
      close,
    };
  },
});
</script>

<style scoped lang="less">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.v-leave-from {
  opacity: 1;
}

.v-enter-to {
  transform: unset;
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
}

.notification {
  box-sizing: border-box;
  position: fixed;
  padding: 14px 14px 14px 13px;
  width: 240px;
  min-height: 120px;
  border-radius: 5px;
  transition: all 0.3s ease;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & span:first-child {
      font-weight: 600;
      color: #000;
    }

    .close {
      cursor: pointer;
      font-size: 25px;
      color: #909399;
    }
  }

  .content {
    position: relative;
    display: -webkit-box;
    padding-top: 15px;
    font-size: 16px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #606266;
    svg {
      position: absolute;
    }
  }
}
</style>
