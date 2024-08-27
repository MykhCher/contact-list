function ContactItem(props) {

  const onContactDelete = (e) => {
    e.stopPropagation();
    props.onDelete(props.contact.id);
  }

  const onContactChange = () => {
    props.tglEdit(props.contact);
  }

  return (
    <div className='listItem' onDoubleClick={onContactChange}>
      <div>
        {props.contact.fName} {props.contact.lName}
      </div>
      <span onClick={onContactDelete}>X</span>
    </div>
  )
}

export default ContactItem