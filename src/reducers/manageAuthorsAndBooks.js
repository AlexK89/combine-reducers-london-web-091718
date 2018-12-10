import {combineReducers} from "redux";

const authorsReducer = (state = [], action) => {
    let idx;

    switch (action.type) {
        case "ADD_AUTHOR":
            return [...state, action.author];

        case "REMOVE_AUTHOR":
            idx = state.indexOf(action.id);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        default:
            return state;
    }
};

const booksReducer = (state = [], action) => {
    let idx;

    switch (action.type) {
        case "ADD_BOOK":
            return [...state, action.book];
        case "REMOVE_BOOK":
            idx = state.indexOf(action.id);
            return [ ...state.slice(0, idx), ...state.slice(idx + 1)];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer
});

export default rootReducer;
