import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Cars from "@/components/Cars.vue";

describe("Cars.vue", () => {
  it("renders h2 tag", () => {
    const wrapper = shallowMount(Cars);
    expect(wrapper.find("h2").text()).equal("Объекты");
  });
});
