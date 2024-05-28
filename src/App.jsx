import { Component } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

class App extends Component {

  state = {

  };

  render() {
    return (
      <div className='container'>
        <ContactList />
        <ContactForm />
      </div>
  )
}
}

export default App
