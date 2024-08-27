import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
// =====
import api from './api/contactService';
import { createEmptyContact } from './constants';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';


function App() {

  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(createEmptyContact());

  useEffect(()=> {
    api.get('/')
      .then(res => {
        setContacts(res.data);
      })
  }, []);


  const toggleToEdit = (contact) => {
    setContactToEdit(contact);
  }

  const toggleToAdd = () => {
    setContactToEdit(createEmptyContact());
  }

  const addContact = (contact) => {
    contact.id = nanoid();
    api.post('/', contact)
      .then(res => {
        const newContacts = [...contacts, res.data];
        setContacts(newContacts);
      })
      .catch(err => console.log(err));
    }

  const editContact = (contact) => {
    api.put(`/${contact.id}`, contact)
    .then(res => {
      const editedContacts = contacts.map(item => item.id === res.data.id ? res.data : item); 
      setContacts(editedContacts);
    })
    .catch(err => console.log(err));
  }

  const deleteContact = (id) => {
    api.delete(`/${id}`)
      .then(() => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
        if (contactToEdit.id === id) {
          setContactToEdit(createEmptyContact());
        }
      });
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
