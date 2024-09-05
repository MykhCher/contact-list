import { useDispatch, useSelector } from 'react-redux';
// =====
import ContactItem from '../ContactItem/ContactItem';
// import { createEmptyContact } from '../../constants';
import api from '../../api/contactService';
import { getContacts, toggleContact } from '../../store/actions/contactActions'; 
import { useEffect } from 'react';


function ContactList() {

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/')
      .then(({data}) => dispatch(getContacts(data)));
  }, [])

  return (
  <>
    <ul>
      
      {contacts.map(
          (contact) => {
              return (
                  <li key={contact.id}>
                    <ContactItem 
                      contact={contact} 
                      // onDelete={onDelete}
                      // tglEdit={props.tglEdit}
                    />
                  </li>
              );
          }
      )}
    </ul>
    <button className='add-btn' onClick={() => dispatch(toggleContact(null))}>Add</button>
  </>
    
  )
}

export default ContactList