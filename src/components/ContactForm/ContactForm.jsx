import { useState } from 'react';

import { createEmptyContact } from '../../constants/constants';


function ContactForm(props) {

  const [editContact, setEditContact] = useState(props.editContact);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(editContact);
    setEditContact(props.editContact.id ? editContact : createEmptyContact());
  }

  const onDelete = () => {
    props.onDelete(editContact.id)
  }

  const onFormClear = e => {
    const inputField = e.target.previousSibling;
    setEditContact({...editContact, [inputField.name]: ''});
  }

  const onFormChange = e => {
    setEditContact({...editContact, [e.target.name]: e.target.value});
  }

    return (
      <>
        <h2>{editContact.id ? 'Edit' : 'Add'} Contact</h2>
        <form className='column'>
          <div className='input-container'>
            <div>
              <input 
                type="text" 
                name="fName"
                value={editContact.fName} 
                placeholder='First Name' 
                onChange={onFormChange}
              />
              <span className='clearForm' onClick={onFormClear}>X</span>
            </div>
            <div>
              <input 
                type="text" 
                name="lName"
                value={editContact.lName} 
                placeholder='Last Name' 
                onChange={onFormChange}
              />
            <span className='clearForm' onClick={onFormClear}>X</span>
            </div>
            <div>
              <input 
                type="text" 
                name="phone"
                value={editContact.phone} 
                placeholder='Phone Number' 
                onChange={onFormChange}
              />
            <span className='clearForm' onClick={onFormClear}>X</span>
            </div>
            <div>
              <input 
                type="text" 
                name="email"
                value={editContact.email} 
                placeholder='Email' 
                onChange={onFormChange}
              />
            <span className='clearForm' onClick={onFormClear}>X</span>
            </div>
          </div>

          <div className='btns'>
            <button 
              onClick={onSubmit}
              className='save-btn'
            >
              Save
            </button>
            <button 
              hidden={!props.editContact.id} 
              onClick={onDelete}
              className='delete-btn'
            >
              Delete
            </button>
          </div>
        </form>
      </>
    )
}

export default ContactForm