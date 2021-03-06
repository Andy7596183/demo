import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHANGE_FILTER
} from "../actions/todos.actions";

export const todos = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      // if there are no todos of this user, the object contain in array is null
      return action.payload[0].id ? [...action.payload] : [];
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case DELETE_TODO:
      // loop through state and for every todo, check if it's equal to the payload
      return state.filter(todo => !action.payload.some(t => t.id === todo.id));
    default:
      return state;
  }
};

export const todosFilter = (state = "all", action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
