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

export default contactsSlice.reducer