import { initialContacts } from "../../constants";
import actionTypes from "../actions/actionTypes";

const initState = {
    contacts: initialContacts, 
    contactToEdit: null
}

export default function (state=initState, { type, payload }) {
    switch (type) {
        case actionTypes.ADD_CONTACT:
            return {
                ...state, 
                contacts: [...state.contacts, payload]
            };
            
        case actionTypes.DELETE_CONTACT:
            return {
                ...state, 
                contacts: state.contacts.filter(item => item.id !== payload)
            };

        case actionTypes.UPDATE_CONTACT:
            return {
                ...state, 
                contacts: state.contacts.map(item => item.id === payload.id ? payload : item)
            };

        case actionTypes.GET_CONTACTS:
            return {
                ...state, 
                contacts: payload
            };

        case actionTypes.TOGGLE_TO_EDIT: 
            return {
                ...state,
                contactToEdit: payload
            }

        default: return state;
    }
}