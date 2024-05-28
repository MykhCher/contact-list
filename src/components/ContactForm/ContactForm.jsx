import { Component } from 'react'

export class ContactForm extends Component {

  state = {
    fName: '',
    lName: '',
    phone: '',
    email: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      fName: '',
      lName: '',
      phone: '',
      email: '',
    });
  }

  render() {
    return (
      <form className='contact-form'>
        <div>
          <input 
            type="text" 
            value={this.state.fName} 
            placeholder='First Name' 
            onChange={(e) => {this.setState({fName :e.target.value})}}
          />
          <span className='clearForm'>X</span>
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.lName} 
            placeholder='Last Name' 
            onChange={(e) => {this.setState({lName :e.target.value})}}
          />
        <span className='clearForm'>X</span>
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.phone} 
            placeholder='Phone Number' 
            onChange={(e) => {this.setState({phone :e.target.value})}}
          />
        <span className='clearForm'>X</span>
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.email} 
            placeholder='Email' 
            onChange={(e) => {this.setState({email :e.target.value})}}
          />
        <span className='clearForm'>X</span>
        </div>
        <div className='btns'>
          <button onClick={this.onSubmit}>Save</button>
          <button>Delete</button>
        </div>
      </form>
    )
  }
}

export default ContactForm