import { Component } from 'react'

export class ContactItem extends Component {
  render() {
    return (
      <div className='listItem'>
        <div>
          {this.props.contact.fName} {this.props.contact.lName}
        </div>
        <span>X</span>
      </div>
    )
  }
}

export default ContactItem