import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';


class App extends Component {

  state = {
    contacts: [
      {
        id: 1,
        fName: 'John',
        lName: 'Doe',
        phone: '+380509999999',
        email: 'johndoe@example.com',
      },
      {
        id: 2,
        fName: 'Tsukiyama',
        lName: 'Shuu',
        phone: '+420509875624',
        email: 'legourmet@example.com',
      },
      {
        id: 3,
        fName: 'Mads',
        lName: 'Mikkelsen',
        phone: '+450504567890',
        email: 'madsmikkelsen@example.com',
      },
    ],
    editContact: this.createEmptyContact(),
  };

  createEmptyContact() {
    return {
      id: null,
      fName: '',
      lName: '',
      phone: '',
      email: '',
    }
  }

  toggleToEdit = (contact) => {
    this.setState({editContact: contact});
  }

  toggleToAdd = () => {
    this.setState({editContact: this.createEmptyContact()});
  }

  createContact = (contact) => {
    if (!contact.id) {
      contact.id = nanoid();
      this.setState((state) => {
        return {contacts: [...state.contacts, contact]}
      });
    }
    this.setState(
      (state) => {
        return {contacts: state.contacts.map((oldContact) => oldContact.id === contact.id ? contact : oldContact)}
      }
    )
  }

  deleteContact = (id) => {
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => contact.id !== id), 
        editContact: state.editContact.id === id ? this.createEmptyContact() : state.editContact
      }
    });
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
              editContact={this.state.editContact}
              emptyContact={this.createEmptyContact}
              key={this.state.editContact.id}
            />
          </div>
        </div>
      </>
  )
}
}

export default App
