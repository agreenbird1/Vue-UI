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
interface INotificationFnProps {
    title: string;
    message: string;
    duration?: number;
    offset?: number;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    showClose?: boolean;
}
export interface INotificationProps extends INotificationFnProps {
    type?: "error" | "success" | "warning" | "info";
}
declare type NotificationTypeFn = (payload: INotificationFnProps) => void;
declare type NotificationFn = (payload: INotificationProps) => void;
declare const Notification: NotificationFn & {
    success: NotificationTypeFn;
    warning: NotificationTypeFn;
    error: NotificationTypeFn;
    info: NotificationTypeFn;
};
export declare function close(id: number, position: Required<INotificationFnProps>["position"], dom: HTMLDivElement): void;
export default Notification;
