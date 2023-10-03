import { useDispatch, useSelector } from 'react-redux';
import { MdPersonRemove } from 'react-icons/md';
import {
  StyledBtnDelete,
  StyledContactLi,
  StyledSpan,
} from './ContactList.styled';
import { StyledTitle, StyledContact } from '../../styles/App.Styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from 'redux/contacts/selectors';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/operations';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterContacts();
  return (
    <StyledContact>
      <StyledTitle>Contacts</StyledTitle>
      <ul>
        {loading && <Loader />}
        {error && <h3>Something went wrong</h3>}
        {filteredData.map(contact => (
          <StyledContactLi key={contact.id}>
            <StyledSpan>
              {contact.name}: <span>{contact.number}</span>
            </StyledSpan>
            <StyledBtnDelete
              onClick={() => dispatch(deleteContactThunk(contact.id))}
            >
              <MdPersonRemove />
            </StyledBtnDelete>
          </StyledContactLi>
        ))}
      </ul>
    </StyledContact>
  );
};
