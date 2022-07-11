import message from "../../components/Message/message";
import { nextTick } from "vue";

const SELECTOR = ".message-container";
const TEXT = "TEST TEXT";

describe("message when function call", () => {
  it("create", async () => {
    message({
      type: "warning",
      text: TEXT,
    });
    const messageBox: HTMLElement = document.querySelector(SELECTOR);
    expect(messageBox).toBeDefined(); // 是否已经创建
    // 需要等下一次渲染之后就行选择器的选择，这样才能获取到 dom
    // 否则获取到的 dom 元素都是 null
    await nextTick();
    // 是否已经插入对应的文本，message 中设计插入了一个 &nbsp; 所以使用 toContain
    expect(messageBox.querySelector(".text").textContent).toContain(TEXT);
  });

  it("create by function type", async () => {
    message.success(TEXT);
    const messageBox: HTMLElement = document.querySelector(SELECTOR);
    await nextTick();
    expect(messageBox.querySelector(".text").textContent).toContain(TEXT);
  });
});