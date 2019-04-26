import store from "./store";

export const loadState = () => {
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

export const saveState = () => {
  try {
    const serializedState = JSON.stringify({ ...store.getState() });
    window.localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error(err);
  }
};
