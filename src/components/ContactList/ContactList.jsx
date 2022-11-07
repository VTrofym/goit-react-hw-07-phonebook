import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/selectors';
// import { deleteContactAction } from 'redux/contacts/sliceContacts';
import { getSelectorsContacts } from 'redux/contacts/selectors';
import { getApiAllContacts, deleteContact } from 'redux/contacts/operations';

import css from './ContactList.module.css';
import { useEffect } from 'react';

export function ContactList() {
  const dispatch = useDispatch();
  const allContacts = useSelector(getSelectorsContacts);

  useEffect(() => {
    dispatch(getApiAllContacts());
  }, [dispatch]);

  const onDeleteContact = event => {
    const { id } = event.currentTarget;
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {allContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.phone}
          <button
            className={css.button}
            id={contact.id}
            onClick={onDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
