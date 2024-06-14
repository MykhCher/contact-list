import { Component } from 'react';
import { nanoid } from 'nanoid';

import { createEmptyContact } from './constants/constants';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';


class App extends Component {

  state = {
    contacts: [],
    editContact: createEmptyContact(),
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      this.setState({contacts: []});
    } else {
      this.setState({contacts: [...contacts]})
    }
  }

  toggleToEdit = (contact) => {
    this.setState({editContact: contact});
  }

  toggleToAdd = () => {
    this.setState({editContact: createEmptyContact()});
  }

  createContact = (contact) => {
    if (!contact.id) {
      contact.id = nanoid();
      this.setState((state) => {
        const newContacts = [...state.contacts, contact];
        this.saveContacts(newContacts);
        return {contacts: newContacts}
      });
    }
    this.setState(
      (state) => {
        const newContacts = state.contacts.map((oldContact) => oldContact.id === contact.id ? contact : oldContact);
        this.saveContacts(newContacts);
        return {contacts: newContacts}
      }
    )
  }

  deleteContact = (id) => {
    this.setState((state) => {
      const newContacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveContacts(newContacts);
      return {
        contacts: newContacts, 
        editContact: state.editContact.id === id ? createEmptyContact() : state.editContact
      }
    });
  }

  saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  render() {
    return (
      <>
        <h1>Contact List</h1>
        <div className='container'>
          <div>
            <h2>Contacts</h2>
            <ContactList 
              contacts={this.state.contacts}
              onDelete={this.deleteContact}
              tglEdit={this.toggleToEdit}
            />
            <button className='add-btn' onClick={this.toggleToAdd}>New</button>
          </div>
          <div>
            <ContactForm 
              onSubmit={this.createContact}
              onDelete={this.deleteContact}
              editContact={this.state.editContact}
              key={this.state.editContact.id}
            />
          </div>
        </div>
      </>
  )
}
}

export default App
