import { FETCH_TODOS } from "../actions/todos.actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todos;
