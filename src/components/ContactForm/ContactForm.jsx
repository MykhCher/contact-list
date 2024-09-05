import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// =====
import api from '../../api/contactService';
import { createEmptyContact } from '../../constants';
import { addContact, deleteContact, updateContact } from '../../store/actions/contactActions';


function ContactForm() {

  const dispatch = useDispatch();
  const idToEdit = useSelector(state => state.contactToEdit);
  const [editContact, setEditContact] = useState(createEmptyContact());

  useEffect(() => {
    idToEdit 
      ? api.get(`/${idToEdit}`)
        .then(({data}) => setEditContact(data)) 
      : setEditContact(createEmptyContact());
    }, [idToEdit])
  
  const onSubmit = (e) => {
    e.preventDefault();
    idToEdit
      ? api.put(`/${idToEdit}`, editContact)
        .then(({data}) => {
          dispatch(updateContact(data.id));
          setEditContact(data)
        })
      : api.post('/', editContact)
        .then(({data}) => {
          dispatch(addContact(data));
          setEditContact(createEmptyContact());
        })
  }

  const onDelete = (e) => {
    e.preventDefault();
    api.delete(`/${idToEdit}`)
      .then(() => {
        dispatch(deleteContact(idToEdit));
        setEditContact(createEmptyContact());
      });
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
        <h2>{idToEdit ? 'Edit' : 'Add'} Contact</h2>
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
              hidden={!idToEdit} 
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