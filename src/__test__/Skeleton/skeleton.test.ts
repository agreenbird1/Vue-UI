import { Skeleton } from "../..";
import { h, nextTick } from "vue";
import { mount } from "@vue/test-utils";

describe("skeleton test", () => {
  it("render", () => {
    const wrapper = mount(Skeleton);
    expect(wrapper.classes()).toContain("skeleton");
  });

  // 验证 props 传递的属性
  it("skeleton props", async () => {
    const wrapper = mount(Skeleton, {
      props: {
        bg: "rgb(0, 0, 0)",
        width: "200px",
        height: "200px",
        animated: true,
      },
    });
    expect(wrapper.classes()).toContain("shan"); // animated 动画效果的类
    expect(
      (wrapper.find(".block").element as HTMLElement).style.backgroundColor
    ).toEqual("rgb(0, 0, 0)");
    await nextTick();
    // 验证宽高属性是否生效
    expect((wrapper.find(".skeleton").element as HTMLElement).style.width).toEqual(
      "200px"
    );
    expect(
      (wrapper.find(".skeleton").element as HTMLElement).style.height
    ).toEqual("200px");
  });
});
