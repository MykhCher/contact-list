import { Component } from 'react'

export class ContactForm extends Component {

  state = {...this.props.editContact};

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.props.editContact.id ? this.state : this.props.emptyContact());
  }

  onDelete = () => {
    this.props.onDelete(this.state.id)
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
          </div>

          <div className='btns'>
            <button onClick={this.onSubmit}>Save</button>
            <button hidden={!this.props.editContact.id} onClick={this.onDelete}>Delete</button>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm