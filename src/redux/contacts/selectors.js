export const getContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  )
}

export const getSelectorsContacts = (state) => state.contacts.contacts
