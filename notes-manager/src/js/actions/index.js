import { ADD_NOTE } from '../constants/action-types';
import { REMOVE_NOTE } from '../constants/action-types';

export function addNote(payload) {
    return {
        'type': ADD_NOTE,
        payload,
    }
}

export function removeNote(payload) {
    return {
        'type': REMOVE_NOTE,
        payload,
    }
}
