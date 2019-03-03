import {CREATE_MESSAGE} from './types';


//CREATE_MESSAGE
export const createMessage=msg=>{
  return {
    type:CREATE_MESSAGE,
    payload:msg
  }
}
