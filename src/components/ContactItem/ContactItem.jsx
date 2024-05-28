import { Component } from 'react'

export class ContactItem extends Component {
  render() {
    return (
      <div>
        {this.props.contact.fName} {this.props.contact.lName}
      </div>
    )
  }
}

export default ContactItem