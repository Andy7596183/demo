import React from "react";
import { shallow } from "enzyme";
import { TodoInput } from "./TodoInput";

describe("<TodoInput />", () => {
  describe("Render without error", () => {
    it("Should render a <h1 />", () => {
      const wrapper = shallow(<TodoInput />);
      expect(wrapper.find("[data-test='todoInputHeader']").length).toBe(1);
    });
  });
});
