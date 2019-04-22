import { combineReducers } from "redux";
import { todos, todosFilter } from "./todos.reducers";

export default combineReducers({
  todos,
  todosFilter
});
