import { createVNode, render } from "vue";
import Message from "./index.vue";

type messageProps = {
  type: string;
  text: string;
};

const dom = document.createElement("div");
dom.setAttribute("class", "message-container");
document.body.appendChild(dom);

// 定时器销毁虚拟节点
let timer: number | null = null;

const MessageFn = (payload: messageProps) => {
  const { type, text } = payload;
  const vnode = createVNode(Message, { type, text });
  render(vnode, dom);
  // 只有单个
  clearTimeout(timer);
  timer = setTimeout(() => {
    // 将空值赋值删除之前的
    render(null, dom);
  }, 2500);
};

// 抽取单个的方法
MessageFn.success = (text: string) => {
  MessageFn({ type: "success", text });
};
MessageFn.error = (text: string) => {
  MessageFn({ type: "error", text });
};
MessageFn.warning = (text: string) => {
  MessageFn({ type: "warning", text });
};

export default MessageFn;
