import { mount } from "@vue/test-utils";
import { h } from "vue"; // 可以通过 ts 编译，需要在 ts.config.json 中配置
import Button from "../../components/Button/index.vue";
import Error from "../../components/Svgs/error.vue";

const TEXT = "TEST TEXT";

describe("button test", () => {
  // 测试传入 props class 是否正常挂载
  it("create", () => {
    const wrapper = mount(Button, {
      props: {
        type: "plain",
        size: "mini",
      },
    });
    expect(wrapper.classes()).toContain("plain");
    expect(wrapper.classes()).toContain("mini");
  });

  // 测试默认插槽中的文字是否渲染正常
  it("render text", () => {
    const wrapper = mount(
      // 使用 h 函数来挂载 slot
      // h(Button, null, {
      //   default: () => TEXT,
      // })
      // 等价的 tsx/jsx 语法
      () => <Button>{() => TEXT}</Button>,
      {
        props: {
          size: "mini",
          type: "plain",
        },
      }
    );

    expect(wrapper.text()).toEqual(TEXT);
  });

  // 测试 icon 插槽传入组件是否正常
  it("render icon", () => {
    const wrapper = mount(
      () => (
        <Button>
          {{
            icon: () => <Error />,
          }}
        </Button>
      ),
      {
        props: {
          size: "mini",
          type: "plain",
        },
      }
    );
    expect(wrapper.findComponent(Error).exists()).toBeTruthy();
  });
});
