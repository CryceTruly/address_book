import axios from 'axios';

import {GET_CONTACTS,DELETE_CONTACT} from './types'



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
  dispach({
    type:DELETE_CONTACT,
    payload:id
  })
}).catch(err=>{
  console.log(err);
})
}
