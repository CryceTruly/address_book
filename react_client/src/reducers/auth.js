import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_LOADING,
  AUTH_LOADING
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  hasSignedUp: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
    case AUTH_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        user: null,
        isAuthenticated: false,
        token: null,
        hasSignedUp: false
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        hasSignedUp: true,
        isLoading: false
      };

    default:
      return state;
  }
}
