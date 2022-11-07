import { createSlice } from '@reduxjs/toolkit'
import { getContacts } from './operations'; 

const Status = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

export const initialState = {
  contacts: [],
  status: Status.init
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContactAction: (state, action) => {
  //     if (
  //     state.contacts.find(
  //       contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${action.payload.name} is already in contacts!`);
  //   }
  //     state.contacts=[...state.contacts, action.payload]
  //   },
  //   deleteContactAction: (state, action) => {
  //     state.contacts=state.contacts.filter(contact=>contact.id !== action.payload)
  //   }
  // },
  extraReducers: {
    [getContacts.pending](state) {
      state.status = Status.loading
    },
    [getContacts.fulfilled](state, action) {
      console.log('action :>> ', action);
      state.status = Status.success
      state.contacts = [...action.payload]
    },
    [getContacts.rejected](state) {
      state.status = Status.error
    },
  }
})

// export const { addContactAction, deleteContactAction } = contactsSlice.actions
export default contactsSlice.reducer