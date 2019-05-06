import { ADD_NOTE } from "../constants/action-types";

export function validateNote({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === ADD_NOTE) {
                if (action.notes.title.length === 0) {
                    return dispatch({ type: "FOUND EMPTY NOTE" })
                }
            }
            return next(action);
        };
    };
}