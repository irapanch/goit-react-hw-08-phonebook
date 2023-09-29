import {
  StyledTitle,
  StyledContact,
  StyledContactLi,
  StyledSpan,
  StyledBtnDelete,
} from '../styles/App.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.contactName.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterContacts();
  return (
    <StyledContact>
      <StyledTitle>Contacts</StyledTitle>
      <ul>
        {filteredData.map(contact => (
          <StyledContactLi key={contact.id}>
            <StyledSpan>
              {contact.contactName}: <span>{contact.number}</span>
            </StyledSpan>
            <StyledBtnDelete
              onClick={() => dispatch(removeContact(contact.id))}
            >
              delete
            </StyledBtnDelete>
          </StyledContactLi>
        ))}
      </ul>
    </StyledContact>
  );
};
