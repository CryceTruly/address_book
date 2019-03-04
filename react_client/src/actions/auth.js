import axios from 'axios';
import {
  returnErrors
} from './messages';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from './types';



export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING
  })

  axios.get('http://127.0.0.1:8000/api/auth/login/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))

      dispatch({
        type: AUTH_ERROR
      })

    })
}



export const logout = () => (dispatch, getState) => {
  axios.post('http://127.0.0.1:8000/api/auth/logout', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS

      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))



    })
}



export const loginUser = (username, password) => (dispatch) => {

  //HEADERS

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //body

  const body = JSON.stringify({
    username,
    password
  })
  axios.post('http://127.0.0.1:8000/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))

      dispatch({
        type: LOGIN_FAIL
      })

    })
}




//Register


export const registerUser = ({
  username,
  email,
  password
}) => (dispatch) => {

  //HEADERS

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //body

  const body = JSON.stringify({
    username,
    email,
    password
  })
  axios.post('http://127.0.0.1:8000/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))

      dispatch({
        type: REGISTER_FAIL
      })

    })
}



// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
