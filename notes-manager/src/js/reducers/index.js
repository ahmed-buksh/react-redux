import { ADD_NOTE } from '../constants/action-types';
import { REMOVE_NOTE } from '../constants/action-types';

const initalState = {
    notes: [],
};

function findIndex(notes, note_to_remove) {
    for(let index=0;index<notes.length;index++) {
        if (notes[index].title === note_to_remove.title) {
            return index;
        }
    }
}

function rootReducer(state=initalState, action) {
    
    if (action.type === ADD_NOTE) {
        return Object.assign({}, state, {
            notes: state.notes.concat(action.payload)
        });
    }

    if (action.type === REMOVE_NOTE) {
        let updated_notes = state.notes.slice();
        let index = findIndex(updated_notes, action.payload);
        updated_notes.splice(index, 1);

        return Object.assign({}, state, {
            notes: updated_notes,
        });
    }

    return state;
}

export default rootReducer;
