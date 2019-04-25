import ADD_NOTE from '../constants'

export function addNote(payload) {
    return {
        'type': ADD_NOTE,
        payload,
    }
}
