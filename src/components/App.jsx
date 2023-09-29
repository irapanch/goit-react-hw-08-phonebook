import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ContactList } from './ContactList';

const App = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

// const [contacts, setContacts] = useState(contactsData);
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   const items = JSON.parse(window.localStorage.getItem('CONTACTS'));
//   if (items?.length) {
//     setContacts(items);
//   }
// }, []);

// useEffect(() => {
//   window.localStorage.setItem('CONTACTS', JSON.stringify(contacts));
// }, [contacts]);

// const handleAddContact = ({ name, number }) => {
//   const contact = {
//     name,
//     id: nanoid(),
//     number,
//   };

//   const item = contacts.find(
//     item => item.name.toLowerCase() === name.toLowerCase()
//   );
//   if (item) {
//     alert(`${name} is already in contacts`);
//   } else {
//     setContacts(prev => [...prev, contact]);
//   }
// };

// const handleChangeFilter = e => {
//   setFilter(e.target.value);
// };

// const filteredContactsArr = (data, filter) => {
//   return data.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// const handleDeleteContact = id => {
//   setContacts(prev => prev.filter(contact => contact.id !== id));
// };

// const filteredContacts = filteredContactsArr(contacts, filter);

// return (
// <div>
//   <ContactForm addContact={handleAddContact} contacts={contacts} />
//   <Filter
//     takeData={handleChangeFilter}
//     filteredContacts={filteredContactsArr}
//   />
//   <ContactList
//     contacts={filteredContacts}
//     deleteContact={handleDeleteContact}
//   />
// </div>
// );
