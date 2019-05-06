import { ADD_NOTE } from '../constants/action-types';
import { REMOVE_NOTE } from '../constants/action-types';

const initalState = {
    notes: [],
};

function rootReducer(state=initalState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.notes]
            };

        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => { return note.id != action.notes.id}),
            };

        default:
            return state;
    }
}

export default rootReducer;
