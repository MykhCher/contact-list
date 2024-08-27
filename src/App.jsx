import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { createEmptyContact } from './constants/constants';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';


function App() {

  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(createEmptyContact());

  useEffect(()=> {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(contacts);
  }, []);

  const toggleToEdit = (contact) => {
    setEditContact(contact);
  }

  const toggleToAdd = () => {
    setEditContact(createEmptyContact());
  }

  const createOrUpdateContact = (contact) => {
    if (!contact.id) {
      contact.id = nanoid();
      setContacts((state) => {
        const newContacts = [...state, contact];
        saveContacts(newContacts);
        return newContacts
      });
    }
    setContacts(
      (state) => {
        const newContacts = state.map((oldContact) => oldContact.id === contact.id ? contact : oldContact);
        saveContacts(newContacts);
        return newContacts
      }
    )
  }

  const deleteContact = (id) => {
    setContacts((state) => {
      const newContacts = state.filter((contact) => contact.id !== id);
      saveContacts(newContacts);
      return newContacts;
    });
    setEditContact(editContact.id === id ? createEmptyContact() : editContact)
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
              onSubmit={createOrUpdateContact}
              onDelete={deleteContact}
              editContact={editContact}
              key={editContact.id}
            />
          </div>
        </div>
      </>
  )
}

export default App
