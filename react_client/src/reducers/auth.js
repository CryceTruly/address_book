import {GET_ERRORS ,USER_LOADING,USER_LOADED,AUTH_ERROR}from '../actions/types';

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
case AUTH_ERROR:
return {
  ...state,
  isLoading:false,
  user:null,
  isAuthenticated:false,
  token:null

};
    default:
    return state

  }
}
