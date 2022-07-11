import Dialog from "../../components/Dialog/index.vue";
import Button from "../../components/Button/index.vue";
import { h, nextTick } from "vue";
import { mount } from "@vue/test-utils";

const TEXT = "TEST TEXT";
const TITLE = "TEST TITLE";

describe("dialog test", () => {
  // 验证正常渲染下的情况
  it("render", async () => {
    const wrapper = mount(<Dialog></Dialog>, {
      props: {
        modelValue: true,
        title: TITLE,
        text: TEXT,
      },
    });
    expect(wrapper.find("h3").text()).toEqual(TITLE);
    // 可以重复向下查找，返回的仍然是 wrapper 对象
    expect(wrapper.find(".body").find("span").text()).toEqual(TEXT);
  });

  // 验证默认底部插槽的取消按钮点击事件
  it("click on cancel button", async () => {
    const wrapper = mount(<Dialog></Dialog>, {
      props: {
        modelValue: true,
        title: TITLE,
        text: TEXT,
      },
    });
    wrapper.find(".gray").trigger("click");
    await nextTick();
    // 触发点击之后，可以判断事件触发的次数
    expect(wrapper.emitted("cancelDialog")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
  });

  // 验证默认底部插槽的确认按钮点击事件
  it("click on confirm button", async () => {
    const wrapper = mount(<Dialog></Dialog>, {
      props: {
        modelValue: true,
        title: TITLE,
        text: TEXT,
      },
    });
    wrapper.find(".primary").trigger("click");
    await nextTick();
    // 触发点击之后
    expect(wrapper.emitted("confirmDialog")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
  });

  // 验证右上角的 x 的点击事件
  it("click on close button", async () => {
    const wrapper = mount(<Dialog></Dialog>, {
      props: {
        modelValue: true,
        title: TITLE,
        text: TEXT,
        showClose: true, // 需要开启 x 显示，否则一直为 emptyDom
      },
    });
    wrapper.find(".header").find("a").trigger("click");
    await nextTick();
    // 触发点击之后
    expect(wrapper.emitted("closeDialog")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
  });

  // 验证 header default footer 插槽
  it("slots test", async () => {
    const wrapper = mount(
      // 这里使用 tsx 语法一直显示 emptyWrapper ，原因未知
      h(
        Dialog,
        {
          modelValue: true,
          title: TITLE,
          text: TEXT,
        },
        {
          default: () => h(Button),
          header: () => h("div", { class: "header-class" }, "header-class"),
          footer: () => h("div", { class: "footer-class" }, "footer-class"),
        }
      )
    );
    await nextTick();
    // 验证插槽是否生效，文字是否显示
    expect(wrapper.findComponent(Button).exists()).toBeTruthy();
    expect(wrapper.find(".header-class").text()).toEqual("header-class");
    expect(wrapper.find(".footer-class").text()).toEqual("footer-class");
  });
});
