import axios from 'axios';
import {createMessage} from './messages';
import {tokenConfig} from './auth';

import {GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT,GET_ERRORS} from './types'



const BASE_URL='http://127.0.0.1:8000/contacts/'

export const getContacts=()=>(dispach,getState)=>{
axios.get(BASE_URL,tokenConfig(getState)).then(contacts=>{
  dispach({
    type:GET_CONTACTS,
    payload:contacts.data
  })
  console.log(contacts.data);
}).catch(err=>{
  console.log(err);
})
}

//Delete


export const deleteContact=(id)=>(dispach,getState)=>{
axios.delete(`${BASE_URL}${id}/`,tokenConfig(getState)).then(contacts=>{

  dispach(createMessage({deleteContact:'Contact Deleted'}))

  dispach({
    type:DELETE_CONTACT,
    payload:id
  })
}).catch(err=>{
  console.log(err);
})
}


export const addContact=(contact)=>(dispach,getState)=>{
axios.post(BASE_URL,contact,tokenConfig(getState)).then(contact=>{

  dispach(createMessage({addContact:'Contact Added'}))

  dispach({
    type:ADD_CONTACT,
    payload:contact.data
  })
}).catch(err=>{
  const errors={
    msg:err.response.data,
    status:err.response.status
  }

  dispach({
    type:GET_ERRORS,
    payload:errors
  })
  console.log(err);
})
}
