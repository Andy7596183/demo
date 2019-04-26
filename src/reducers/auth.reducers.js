import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/auth.actions";

const initialState = {
  isLogin: false,
  loginErr: "",
  registerErr: ""
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLogin: true,
        loginErr: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginErr: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerErr: ""
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerErr: action.payload
      };
    default:
      return state;
  }
};

export default auth;
