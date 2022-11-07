import { createSlice } from '@reduxjs/toolkit'
import { getApiAllContacts, addContact, deleteContact } from './operations'; 

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
    [getApiAllContacts.pending](state) {
      state.status = Status.loading
    },
    [getApiAllContacts.fulfilled](state, action) {
      state.status = Status.success
      state.contacts = [...action.payload]
    },
    [getApiAllContacts.rejected](state) {
      state.status = Status.error
    },

    [addContact.pending](state) {
      state.status = Status.loading
    },
    [addContact.fulfilled](state, action) {
      state.status = Status.success
      state.contacts = [...state.contacts, action.payload]
    },
    [addContact.rejected](state) {
      state.status = Status.error
    },

    [deleteContact.pending](state) {
      state.status = Status.loading
    },
    [deleteContact.fulfilled](state, action) {
      state.status = Status.success
      state.contacts=state.contacts.filter(contact=>contact.id !== action.payload.id)
    },
    [deleteContact.rejected](state) {
      state.status = Status.error
    },
  }
})

// export const { addContactAction, deleteContactAction } = contactsSlice.actions
export default contactsSlice.reducer