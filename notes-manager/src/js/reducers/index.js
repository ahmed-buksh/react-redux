import { ADD_NOTE } from '../constants/action-types'

const initalState = {
    notes: [],
};

function rootReducer(state =initalState, action) {
    
    if (action.type === ADD_NOTE) {
        return Object.assign({}, state, {
            notes: state.notes.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;
