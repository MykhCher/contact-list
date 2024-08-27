import ContactItem from '../ContactItem/ContactItem'

function ContactList(props) {
  return (
    <ul>
      
      {props.contacts.map(
          (contact) => {
              return (
                  <li key={contact.id}>
                    <ContactItem 
                      contact={contact} 
                      onDelete={props.onDelete}
                      tglEdit={props.tglEdit}
                    />
                  </li>
              );
          }
      )}
    </ul>
  )
}

export default ContactList