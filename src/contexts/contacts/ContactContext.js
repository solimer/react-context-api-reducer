import { useReducer } from 'react';
import createUseContext from 'constate';
import actions from './contactsActions';
import reducer from './contactsReducer';

const initialState = {
  contacts: [
    {
      id: '098',
      name: 'Diana Prince',
      email: 'diana@us.army.mil',
    },
    {
      id: '099',
      name: 'Bruce Wayne',
      email: 'bruce@batmail.com',
    },
    {
      id: '100',
      name: 'Clark Kent',
      email: 'clark@metropolitan.com',
    },
  ],
  loading: false,
  error: null,
};

const useContacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { contacts, loading } = state;
  const addContact = (name, email) => {
    dispatch({
      type: actions.ADD_CONTACT,
      payload: { id: '123456', name, email },
    });
  };
  const delContact = id => {
    dispatch({
      type: actions.DEL_CONTACT,
      payload: id,
    });
  };

  return { contacts, loading, addContact, delContact };
};

export const useContactsContext = createUseContext(useContacts);
