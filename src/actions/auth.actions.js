import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const login = (user, callback) => async dispatch => {
  const res = await axios("http://localhost:5000/auth/login", {
    method: "post",
    data: user
    // withCredentials: true
  });
  // login fail
  if (!res.data.token) {
    console.log(res.data.msg);
    dispatch({
      type: LOGIN_FAIL,
      payload: res.data.msg
    });
  } else {
    // login success
    dispatch({ type: LOGIN_SUCCESS });
    window.localStorage.setItem("token", res.data.token);
    callback();
  }
};

export const register = (user, callback) => async dispatch => {
  const res = await axios("http://localhost:5000/auth/register", {
    method: "post",
    data: user
  });
  if (res.data.msg) {
    dispatch({
      type: REGISTER_FAIL,
      payload: res.data.msg
    });
  } else {
    dispatch({ type: REGISTER_SUCCESS });
  }
  callback();
};

export const logout = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/auth/logout");
  dispatch({
    type: LOGOUT,
    payload: res.data.isLogin
  });
};
