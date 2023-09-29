import React, { useState } from 'react';

import { StyledTitle, StyledDesc } from '../../styles/App.Styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { StyledForm, StyledBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
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

// const ContactForm = ({ addContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChangeInput = e => {
//     if (e.target.name === 'name') {
//       setName(e.target.value);
//     } else if (e.target.name === 'number') {
//       setNumber(e.target.value);
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     addContact({ name, number });
//     setName('');
//     setNumber('');
//   };
