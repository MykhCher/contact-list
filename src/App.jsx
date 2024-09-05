import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
// =====
import './App.css';


function App() {

    return (
      <>
        <h1>Contact List</h1>
        <div className='container'>
          <div>
            <h2>Contacts</h2>
            <ContactList />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </>
  )
}

export default App
