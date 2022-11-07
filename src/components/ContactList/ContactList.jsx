import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/selectors';
// import { deleteContactAction } from 'redux/contacts/sliceContacts';
import { getApiContacts } from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';

import css from './ContactList.module.css';
import { useEffect } from 'react';

export function ContactList() {
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const allContacts = useSelector(getApiContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // const onDeleteContact = event => {
  //   const { id } = event.currentTarget;
  //   dispatch(deleteContactAction(id));
  // };

  return (
    <ul className={css.list}>
      {allContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.phone}
          <button
            className={css.button}
            id={contact.id}
            // onClick={onDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
