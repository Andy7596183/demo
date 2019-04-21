import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  describe("correct amount of <TodoItem /> components", () => {
    it("should render no <TodoItem /> components", () => {
      const wrapper = shallow(<TodoList todos={[]} />);
      expect(wrapper)
        .find("TodoItem")
        .to.have.length(0);
    });
    it("should render one <TodoItem /> component", () => {
      const wrapper = shallow(
        <TodoList
          todos={[{ userId: 1, id: 1, title: "todo 1", completed: false }]}
        />
      );
      expect(wrapper)
        .find("TodoItem")
        .to.have.length(1);
    });
    it("should render two <TodoItem /> components", () => {
      const wrapper = shallow(
        <TodoList
          todos={[
            { userId: 1, id: 1, title: "todo 1", completed: false },
            { userId: 2, id: 2, title: "todo 2", completed: true }
          ]}
        />
      );
      expect(wrapper)
        .find("TodoItem")
        .to.have.length(2);
    });
  });
});
