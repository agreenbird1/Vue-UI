/**
 * 1. 编写静态组件页面
 *    - 确定需要传入的参数 => 自己的思考以及参照 element-plus
 *    - 确定动画的控制效果 => 移入的和向上
 *    - 确定参数与样式显示、动画等的效果的关系
 * 2. 使用 createVNode 和 render 函数进行汉书式的调用和渲染
 *    - 确定方法和参数，与 props 参数的异同
 *    - 确定四个方向 => 参考 ep ，方位可以控制组件的定位动画
 *    - 确定每一个的布局以及默认属性
 * 3. 因为每一次的渲染都会有移除( render(null, dom) ),
 *    所以需要创建多个dom
 * 4. 删除时候，需要将对应的 id 从不同的数组中取出删除，页面删除，存储内容中删除
 *    同时要注意删除后对其他 notification 的影响，
 *    - 通过 document.body.removeChild 来移除之前的 dom，否则页面上会遗留
 *    - 通过 render(null, dom) 来移除对应的 notification
 *    - 通过确定的高度以及 gap 来决定后续的 notification 需要移动的距离（做动画）
 */

import { render, createVNode, VNode } from "vue";
import NotificationCp from "./index.vue";

// type 确定时候的函数调用参数
interface INotificationFnProps {
  title: string;
  message: string;
  duration?: number;
  offset?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  showClose?: boolean;
}
// 非确定调用可以传入 type，默认 info
export interface INotificationProps extends INotificationFnProps {
  type?: "error" | "success" | "warning" | "info";
}

type NotificationTypeFn = (payload: INotificationFnProps) => void;
type NotificationFn = (payload: INotificationProps) => void;

// 存储四个方向上的
const notifications: Record<
  Required<INotificationFnProps>["position"],
  VNode[]
> = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": [],
};

let id = 1; // 每个vnode的id，方便查找，删除
let zIndex = 99; // 初始z-index值，后面生成的 vnode 应该更高
const GAP_SIZE = 16; // 每一个 notification 之间的距离
const notificationHeight = 120; // 每一个 notification 的高度

const Notification: NotificationFn & {
  success: NotificationTypeFn;
  warning: NotificationTypeFn;
  error: NotificationTypeFn;
  info: NotificationTypeFn;
} = (payload: INotificationProps) => {
  // top 的距离由传入的参数以及本身已经存在了的 notification 来决定
  let verticalOffset = payload.offset || 0;
  const vm_id = id++;
  const vm_zIndex = zIndex++;
  const position = payload.position || "top-right";
  const duration = payload.duration || 4500;
  // 新的 vnode 的定位值应该靠之前存在的决定
  notifications[position].forEach((vm) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + GAP_SIZE;
  });
  verticalOffset += GAP_SIZE;
  payload.offset = verticalOffset;
  // id 和 zIndex 都是确定的，不需要传，但都需要加
  // onClose 是为了能够让用户点击关闭
  const vnode = createVNode(NotificationCp, {
    ...payload,
    id: vm_id,
    zIndex: vm_zIndex,
    onClose: () => close(vm_id, position, dom),
  });
  notifications[position].push(vnode);
  const dom = document.createElement("div");
  document.body.appendChild(dom);
  render(vnode, dom);
  // 到时结束
  setTimeout(() => {
    render(null, dom);
    close(vm_id, position, dom);
  }, duration);
};

Notification.success = (payload) => {
  Notification({ type: "success", ...payload });
};
Notification.warning = (payload) => {
  Notification({ type: "warning", ...payload });
};
Notification.error = (payload) => {
  Notification({ type: "error", ...payload });
};
Notification.info = (payload) => {
  Notification({ type: "info", ...payload });
};

export function close(
  id: number,
  position: Required<INotificationFnProps>["position"],
  dom: HTMLDivElement
) {
  document.body.removeChild(dom);
  const orientedNotifications = notifications[position];
  const idx = orientedNotifications.findIndex(
    (vm) => vm.component?.props.id === id
  );
  if (idx === -1) return;
  // 获取被删除的vm
  const vm = orientedNotifications[idx];
  const removedHeight = vm.el!.offsetHeight;
  // 判断当前位置是 bottom 还是 top
  const verticalPosition = position.split("-")[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;
  if (len < 1) return;
  // 从被删除的节点开始，它后面的节点的top或者bottom值会产生变化
  for (let i = idx; i < len; i++) {
    const { el, component } = orientedNotifications[i];
    const pos =
      Number.parseInt(el!.style[verticalPosition], 10) -
      removedHeight -
      GAP_SIZE -
      notificationHeight;
    // 对应的每一个 notification 向上或者向下移动一个gap + height的距离
    component!.props.offset = pos;
  }
}

export default Notification;
