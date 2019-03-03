import {GET_CONTACTS,DELETE_CONTACT} from '../actions/types.js';

const initialState={
  contacts:[]
}


export default function(state=initialState,
action){

  switch (action.type) {
    case GET_CONTACTS:
    return {
      ...state,
      contacts:action.payload
    };

    case DELETE_CONTACT:

    return {
      ...state,
      contacts:state.contacts.filter(contact=>contact.id!==action.payload)
    };
    default:
       return state;

  }

}
