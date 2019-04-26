import axios from "axios";
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_FILTER = "CHANGE_FILTER";

// todo crud
export const fetchTodos = () => async dispatch => {
  const config = {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  };
  const res = await axios.get("http://localhost:5000/api/todos", config);
  console.log(res.data);
  await dispatch({
    type: FETCH_TODOS,
    payload: res.data
  });
};

export const addTodo = todo => async dispatch => {
  const res = await axios.post(`http://localhost:5000/api/todos`, todo);
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
};

export const updateTodo = todo => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/todos/${todo.id}`,
    todo
  );
  dispatch({
    type: UPDATE_TODO,
    payload: res.data
  });
};

export const deleteTodo = id => async dispatch => {
  const res = await axios.delete(`http://localhost:5000/api/todos/${id}`);
  dispatch({
    type: DELETE_TODO,
    payload: res.data
  });
};

export const deleteCompleted = () => async dispatch => {
  const res = await axios.delete(`http://localhost:5000/api/todos/completed`);
  dispatch({
    type: DELETE_TODO,
    payload: res.data
  });
};

// change filter options
export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    payload: filter
  };
};
