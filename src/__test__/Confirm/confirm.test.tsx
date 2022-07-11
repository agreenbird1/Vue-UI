import { nextTick } from "vue";
import confirm from "../../components/Confirm/confirm";

const SELECTOR = ".confirm-container";
const TEXT = "TEST TEXT";
const TITLE = "TEST TITLE";

describe("confirm test", () => {
  // 测试函数生成时候是否创建了对应的 confirm 组件
  it("create", async () => {
    confirm({
      title: TITLE,
      text: TEXT,
    });
    const confirmBox: HTMLElement = document.querySelector(SELECTOR);
    expect(confirmBox).toBeDefined(); // 是否已经创建
    // 需要等下一次渲染之后就行选择器的选择，这样才能获取到 dom
    // 否则获取到的 dom 元素都是 null
    await nextTick();
    // 是否已经插入对应的文本
    expect(confirmBox.querySelector(".header").children[0].textContent).toEqual(
      TITLE
    );
    expect(confirmBox.querySelector(".body").children[0].textContent).toEqual(
      TEXT
    );
  });

  // 触发点击事件，是否关闭
  it("click confirm button", async () => {
    confirm({
      title: TEXT,
      text: TITLE,
    });
    const confirmBox: HTMLElement = document.querySelector(SELECTOR);
    await nextTick();
    const confirmButton: HTMLButtonElement =
      confirmBox.querySelector(".primary");
    expect(confirmButton).toBeDefined();
    confirmButton.click(); // 触发点击事件，之后会删除渲染的dom节点
    await nextTick();
    expect(confirmBox.children[0]).toBeUndefined();
  });

  // 触发点击事件，是否关闭
  it("click cancel button", async () => {
    confirm({
      title: TEXT,
      text: TITLE,
    }).then(
      (res) => {
        expect(res).toBeUndefined();
      },
      (error) => {
        expect(error).toBe("点击取消");
      }
    );
    const confirmBox: HTMLElement = document.querySelector(SELECTOR);
    await nextTick();
    const cancelButton: HTMLButtonElement = confirmBox.querySelector(".gray");
    expect(cancelButton).toBeDefined();
    cancelButton.click(); // 触发点击事件，之后会删除渲染的dom节点
    await nextTick();
    expect(confirmBox.children[0]).toBeUndefined();
  });
});
