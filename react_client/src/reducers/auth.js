import {GET_ERRORS, REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,USER_LOADING,USER_LOADED,AUTH_ERROR}from '../actions/types';

const initialState={
token:localStorage.getItem('token'),
isAuthenticated:null,
isLoading:false,
user:null

  }


export default function(state=initialState,
  action){
  switch (action.type) {
case USER_LOADING:
return {
  ...state,
  isLoading:true,

}
case USER_LOADED:
return {
  ...state,
  isLoading:false,
  user:action.payload

};
case LOGIN_FAIL:
case LOGOUT_SUCCESS:
case AUTH_ERROR:
case REGISTER_FAIL:
localStorage.removeItem("token");
return {
  ...state,
  isLoading:false,
  user:null,
  isAuthenticated:false,
  token:null,


};

case LOGIN_SUCCESS:
case REGISTER_SUCCESS:
localStorage.setItem('token',action.payload.token)
return{
  ...state,
  ...action.payload,
  isAuthenticated:true,
  isLoading:false
}


    default:
    return state

  }
}
