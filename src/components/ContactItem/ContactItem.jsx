import { Component } from 'react'

export class ContactItem extends Component {

  onContactDelete = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  }

  onContactChange = () => {
    this.props.tglEdit(this.props.contact);
  }

  render() {
    return (
      <div className='listItem' onDoubleClick={this.onContactChange}>
        <div>
          {this.props.contact.fName} {this.props.contact.lName}
        </div>
        <span onClick={this.onContactDelete}>X</span>
      </div>
    )
  }
}

export default ContactItem