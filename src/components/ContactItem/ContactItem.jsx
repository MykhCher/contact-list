import { useDispatch } from "react-redux";
import { deleteContact, toggleContact } from "../../store/actions/contactActions";
import api from '../../api/contactService';

function ContactItem(props) {

  const {id, fName, lName} = props.contact;

  const dispatch = useDispatch();

  const onContactDelete = (e) => {
    e.stopPropagation();
    api.delete(`/${id}`)
      .then(() => {
        dispatch(deleteContact(id));
        dispatch(toggleContact(null));
      });
  }

  const onContactChange = () => {
    dispatch(toggleContact(id));
  }

  return (
    <div className='listItem' onDoubleClick={onContactChange}>
      <div>
        {fName} {lName}
      </div>
      <span onClick={onContactDelete}>X</span>
    </div>
  )
}

export default ContactItem