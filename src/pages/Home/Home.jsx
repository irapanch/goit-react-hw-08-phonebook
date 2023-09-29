import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Home = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Home;
