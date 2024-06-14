import { Component } from 'react';

import { createEmptyContact } from '../../constants/constants';


export class ContactForm extends Component {

  state = {...this.props.editContact};

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.props.editContact.id ? this.state : createEmptyContact());
  }

  onDelete = () => {
    this.props.onDelete(this.state.id)
  }

  onFormClear = e => {
    const inputField = e.target.previousSibling;
    this.setState({[inputField.name]: ''});
  }

  onFormChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <>
        <h2>{this.state.id ? 'Edit' : 'Add'} Contact</h2>
        <form className='column'>
          <div className='input-container'>
            <div>
              <input 
                type="text" 
                name="fName"
                value={this.state.fName} 
                placeholder='First Name' 
                onChange={this.onFormChange}
              />
              <span className='clearForm' onClick={this.onFormClear}>X</span>
            </div>
            <div>
              <input 
                type="text" 
                name="lName"
                value={this.state.lName} 
                placeholder='Last Name' 
                onChange={this.onFormChange}
              />
            <span className='clearForm' onClick={this.onFormClear}>X</span>
            </div>
            <div>
              <input 
                type="text" 
                name="phone"
                value={this.state.phone} 
                placeholder='Phone Number' 
                onChange={this.onFormChange}
              />
            <span className='clearForm' onClick={this.onFormClear}>X</span>
            </div>
            <div>
              <input 
                type="text" 
                name="email"
                value={this.state.email} 
                placeholder='Email' 
                onChange={this.onFormChange}
              />
            <span className='clearForm' onClick={this.onFormClear}>X</span>
            </div>
          </div>

          <div className='btns'>
            <button 
              onClick={this.onSubmit}
              className='save-btn'
            >
              Save
            </button>
            <button 
              hidden={!this.props.editContact.id} 
              onClick={this.onDelete}
              className='delete-btn'
            >
              Delete
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm