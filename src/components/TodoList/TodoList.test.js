import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "./TodoList";
import TodoItem from "../TodoItem/TodoItem";

function TodoListComponent(todos) {
  return shallow(<TodoList todos={todos} fetchTodos={() => {}} />);
}

describe("<TodoList />", () => {
  describe("correct amount of <TodoItem /> components", () => {
    it("should render no <TodoItem />", () => {
      const wrapper = TodoListComponent([]);
      expect(wrapper.find(TodoItem).length).toBe(0);
    });

    it("should render one <TodoItem />", () => {
      const wrapper = TodoListComponent([
        { user_id: 1, id: 1, title: "todo 1", completed: false }
      ]);
      expect(wrapper.find(TodoItem).length).toBe(1);
      console.log(wrapper.debug());
    });

    it("should render two <TodoItem />", () => {
      const wrapper = TodoListComponent([
        { user_id: 1, id: 1, title: "todo 1", completed: false },
        { user_id: 2, id: 2, title: "todo 2", completed: true }
      ]);
      expect(wrapper.find(TodoItem).length).toBe(2);
    });
  });
});
