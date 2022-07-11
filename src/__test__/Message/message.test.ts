import { mount } from "@vue/test-utils";
import Message from "../../components/Message/index.vue";
import warning from "../../components/Svgs/warning.vue";
import error from "../../components/Svgs/error.vue";

const TEXT = "TEST TEXT";

describe("message test", () => {
  // 测试默认渲染下
  it("render", () => {
    const wrapper = mount(Message);
    expect(wrapper.find(".text").text()).toEqual(""); // text 渲染
    expect(wrapper.findComponent(warning)).toBeTruthy(); // svg 渲染
  });

  // 测试传递 prop 的情况下
  it("render", () => {
    const wrapper = mount(Message,{
      props:{
        text:TEXT,
        type:"error"
      }
    });
    expect(wrapper.find(".text").text()).toEqual(TEXT); // text 渲染
    expect(wrapper.findComponent(error)).toBeTruthy(); // svg 渲染
  });
});
