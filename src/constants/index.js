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