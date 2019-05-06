import { ADD_NOTE } from '../constants/action-types';
import { REMOVE_NOTE } from '../constants/action-types';

export function addNote(notes) {
    return {
        'type': ADD_NOTE,
        notes,
    }
}

export function removeNote(notes) {
    return {
        'type': REMOVE_NOTE,
        notes,
    }
}
