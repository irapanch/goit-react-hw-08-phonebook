import React, { useState } from 'react';
import { StyledTitle, StyledDesc } from '../../styles/App.Styled';
import { StyledForm, StyledBtn } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const findByName = contacts.find(contact => contact.name === name);
    if (!findByName) {
      dispatch(addContactThunk({ name, number }));
    } else alert(`${findByName.name} is already in contacts`);
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Phonebook</StyledTitle>
      <StyledDesc>Name</StyledDesc>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <StyledDesc>Phone number</StyledDesc>
      <input
        type="tel"
        name="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="XXX-XXX-XXXX"
      />

      <StyledBtn type="submit">Add Contact</StyledBtn>
    </StyledForm>
  );
};

export default ContactForm;
