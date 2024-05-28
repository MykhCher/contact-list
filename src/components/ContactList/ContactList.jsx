import { Component } from 'react'
import ContactItem from '../ContactItem/ContactItem'

export class ContactList extends Component {
  render() {
    return (
      <ul>
        
        {this.props.contacts.map(
            (contact) => {
                return (
                    <li key={contact.fName}><ContactItem contact={contact}/></li>
                );
            }
        )}
      </ul>
    )
  }
}

export default ContactList