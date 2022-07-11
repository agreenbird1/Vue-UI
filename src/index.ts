import confirm from "./components/Confirm/confirm";
import message from "./components/Message/message";
import AftDialog from "./components/Dialog/index.vue";
import notify from "./components/Notification/notify";
import AftButton from "./components/Button/index.vue";
import AftSkeleton from "./components/Skeleton/index.vue";

const components = [AftDialog, AftButton, AftSkeleton];

// 全局注册
const install = (app): void => {
  components.forEach((component) => {
    console.log("global component: ", component.name);
    app.component(component.name as string, component);
  });
};

// 局部注册
export { confirm, message, notify, AftDialog, AftButton, AftSkeleton };
export default {
  install,
};
