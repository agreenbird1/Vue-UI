import confirm from "./components/Confirm/confirm";
import message from "./components/Message/message";
import Dialog from "./components/Dialog/index.vue";
import notify from "./components/Notification/notify";
import Button from "./components/Button/index.vue";
import Skeleton from "./components/Skeleton/index.vue";

const components = [Dialog, Button, Skeleton];

// 全局注册
const install = (app): void => {
  components.forEach((component) => {
    console.log("global component: ", component.name);
    app.component(component.name as string, component);
  });
};

// 局部注册
export { confirm, message, notify, Dialog, Button, Skeleton };
export default {
  install,
};
