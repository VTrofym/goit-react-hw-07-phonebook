export const getContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  )
}

export const getApiContacts = (state) => state.contacts.contacts