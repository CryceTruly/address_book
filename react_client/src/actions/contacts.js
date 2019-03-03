import axios from 'axios';
import {createMessage} from './messages';

import {GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT,GET_ERRORS} from './types'



const BASE_URL='http://127.0.0.1:8000/contacts/'

export const getContacts=()=>dispach=>{
axios.get(BASE_URL).then(contacts=>{
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


export const deleteContact=(id)=>dispach=>{
axios.delete(`${BASE_URL}${id}/`).then(contacts=>{

  dispach(createMessage({deleteContact:'Contact Deleted'}))

  dispach({
    type:DELETE_CONTACT,
    payload:id
  })
}).catch(err=>{
  console.log(err);
})
}


export const addContact=(contact)=>dispach=>{
axios.post(BASE_URL,contact).then(contact=>{

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
