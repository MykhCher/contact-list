import { Component } from 'react'

export class ContactForm extends Component {

  state = {
    fName: '',
    lName: '',
    phone: '',
    email: '',
  };

  render() {
    return (
      <form className='contact-form'>
        <input 
          type="text" 
          value={this.state.fName} 
          placeholder='First Name' 
          onChange={(e) => {this.setState({fName :e.target.value})}}
        />
        <input 
          type="text" 
          value={this.state.lName} 
          placeholder='Last Name' 
          onChange={(e) => {this.setState({lName :e.target.value})}}
        />
        <input 
          type="text" 
          value={this.state.phone} 
          placeholder='Phone Number' 
          onChange={(e) => {this.setState({phone :e.target.value})}}
        />
        <input 
          type="text" 
          value={this.state.email} 
          placeholder='Email' 
          onChange={(e) => {this.setState({email :e.target.value})}}
        />
      </form>
    )
  }
}

export default ContactForm