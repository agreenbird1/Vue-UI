import { notify } from "../..";
import { nextTick } from "vue";

const SELECTOR = ".notification";
const TEXT = "TEST TEXT";
const TITLE = "TEST TITLE";

describe("notification test", () => {
  // 验证创建 notification 是否正确，右上角验证 x 关闭
  it("create", async () => {
    notify({
      title: TITLE,
      text: TEXT,
      showClose: true,
    });
    const notificationBox: HTMLElement = document.querySelector(SELECTOR);
    expect(notificationBox).toBeDefined(); // 是否已经创建
    await nextTick();
    expect(
      notificationBox.querySelector(".header").children[0].textContent
    ).toEqual(TITLE);
    expect(
      notificationBox.querySelector(".content").lastChild.textContent
    ).toContain(TEXT);
    const closeTag: HTMLButtonElement = notificationBox.querySelector(".close");
    closeTag.click();
    await nextTick();
    // 有 4500 的 duration 延后，否则会影响后面的测试
    expect(document.querySelector(SELECTOR)).toBeNull();
  });

  // 验证传入的参数的正确
  it("notification props about offset , position", async () => {
    notify({
      title: TITLE,
      text: TEXT,
      offset: 20,
      position: "bottom-right",
      showClose: true,
    });
    const notificationBox: HTMLElement = document.querySelector(SELECTOR);
    expect(notificationBox).toBeDefined(); // 是否已经创建
    await nextTick();
    expect(notificationBox.style.right).toEqual("16px");
    expect(notificationBox.style.bottom).toEqual(20 + 16 + "px"); // 默认有 16px 的距离
    (notificationBox.querySelector(".close") as HTMLButtonElement).click();
    await nextTick();
  });

  // mock 定时器
  jest.useFakeTimers();
  // 模拟的 setTimeout 函数，同时也会跟踪它的调用
  jest.spyOn(window, "setTimeout");

  // 验证 duration
  it("notification props about duration", async () => {
    expect.assertions(2); // 断言次数判断
    notify({
      title: TITLE,
      text: TEXT,
      duration: 4000,
      showClose: true,
    });
    const notificationBox: HTMLElement = document.querySelector(SELECTOR);
    await nextTick();
    // 可以判断当前的定时器的调用时机，默认值为4500，断言时候调用为4000
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
    (notificationBox.querySelector(".close") as HTMLButtonElement).click();
    await nextTick();
  });

  // 验证函数单独调用
  it("function call", () => {
    notify.success({
      title: TITLE,
      text: TEXT,
    });
    const notificationBox: HTMLElement = document.querySelector(SELECTOR);
    expect(notificationBox).toBeDefined(); // 是否已经创建
  });
});
