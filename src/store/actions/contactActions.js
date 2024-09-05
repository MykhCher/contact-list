import actionTypes from './actionTypes';

export function addContact(contact) {
    return {type: actionTypes.ADD_CONTACT, payload: contact}
}

export function deleteContact(id) {
    return {type: actionTypes.DELETE_CONTACT, payload: id}
}

export function updateContact(contact) {
    return {type: actionTypes.UPDATE_CONTACT, payload: contact}
}

export function getContacts(contacts) {
    return {type: actionTypes.GET_CONTACTS, payload: contacts}
}

export function toggleContact(id) {
    return {type: actionTypes.TOGGLE_TO_EDIT, payload: id}
}
