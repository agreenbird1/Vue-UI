import { mount } from "@vue/test-utils";
import Button from "../../components/Button/index.vue";

describe("button test", () => {
  it("create",()=>{
    const wrapper = mount(Button, {
      props: {
        type: "plain",
        size: "mini",
      },
    });
    expect(wrapper.classes()).toContain('plain')
    expect(wrapper.classes()).toContain('mini')
  })
  
});
