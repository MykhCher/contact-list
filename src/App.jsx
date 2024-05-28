import { Component } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

class App extends Component {

  state = {
    contacts: [
      {
        id: 1,
        fName: 'John',
        lName: 'Doe',
        phone: '+380509999999',
        email: 'johndoe@example.com',
        isEdited: false,
      },
      {
        id: 2,
        fName: 'Tsukiyama',
        lName: 'Shuu',
        phone: '+420509875624',
        email: 'legourmet@example.com',
        isEdited: false,
      },
      {
        id: 3,
        fName: 'Mads',
        lName: 'Mikkelsen',
        phone: '+450504567890',
        email: 'madsmikkelsen@example.com',
        isEdited: false,
      },
    ]
  };

  createContact = (contact) => {
    contact.id = Date.now();
    contact.isEdited = false;
    this.setState((state) => {
      return {contacts: [...state.contacts, contact]}
    });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <ContactList contacts={this.state.contacts}/>
          <button className='add-btn'>New</button>
        </div>
        <div>
          <ContactForm 
            onSubmit={this.createContact}/>
        </div>
      </div>
  )
}
}

export default App
