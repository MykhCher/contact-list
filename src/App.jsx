import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { createEmptyContact } from './constants/constants';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';


function App() {

  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(createEmptyContact());

  useEffect(()=> {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(contacts);
  }, []);


  const toggleToEdit = (contact) => {
    setContactToEdit(contact);
  }

  const toggleToAdd = () => {
    setContactToEdit(createEmptyContact());
  }

  const addContact = (contact) => {
    contact.id = nanoid();

    const newContacts = [...contacts, contact];

    setContacts(newContacts);
    saveContacts(newContacts);
  }

  const editContact = (contact) => {
    const editedContacts = contacts.map(item => item.id === contact.id ? contact : item); 

    setContacts(editedContacts);
    saveContacts(editedContacts);
  }

  const deleteContact = (id) => {
    setContacts((state) => {
      const newContacts = state.filter((contact) => contact.id !== id);
      saveContacts(newContacts);
      return newContacts;
    });
    setContactToEdit(contactToEdit.id === id ? createEmptyContact() : contactToEdit)
  }

  
  const saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }


    return (
      <>
        <h1>Contact List</h1>
        <div className='container'>
          <div>
            <h2>Contacts</h2>
            <ContactList 
              contacts={contacts}
              onDelete={deleteContact}
              tglEdit={toggleToEdit}
            />
            <button className='add-btn' onClick={toggleToAdd}>New</button>
          </div>
          <div>
            <ContactForm 
              addContact={addContact}
              editContact={editContact}
              onDelete={deleteContact}
              contactToEdit={contactToEdit}
              key={contactToEdit.id}
            />
          </div>
        </div>
      </>
  )
}

export default App
