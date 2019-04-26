import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
// import { loadState } from "./localStorage";

// put this here because error occurs if exoort this from ./localStorage
const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export default createStore(
  rootReducer,
  loadState(),
  applyMiddleware(ThunkMiddleware)
);
