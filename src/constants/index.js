export function createEmptyContact() {
    return {
        id: null,
        fName: '',
        lName: '',
        phone: '',
        email: '',
    }
}
export const BASE_URL = 'http://localhost:5000/contacts';

export const initialContacts = [
    {
        id: 1,
        fName: 'John',
        lName: 'Doe',
        phone: '+555555555',
        email: 'j-d@ex.com'
    },
    {
        id: 2,
        fName: 'Jane',
        lName: 'Smith',
        phone: '+234567890',
        email: 'j-sm@ex.com'
    },
    {
        id: 3,
        fName: 'Sam',
        lName: 'Hatch',
        phone: '+987654321',
        email: 's-h@ex.com'
    },
]