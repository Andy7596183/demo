import axios from "axios";
export const FETCH_TODOS = "FETCH_TODOS";

export const fetchTodos = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  await dispatch({
    type: FETCH_TODOS,
    payload: res.data
  });
};
