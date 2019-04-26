import { combineReducers } from "redux";
import { todos, todosFilter } from "./todos.reducers";
import auth from "./auth.reducers";

export default combineReducers({
  todos,
  todosFilter,
  auth
});
