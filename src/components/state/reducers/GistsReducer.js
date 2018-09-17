import {
    FETCH_GISTS_PENDING,
    FETCH_GISTS_FULFILLED,
    FETCH_GISTS_REJECTED
} from '../actions/types';


// INITIALIZE STATE

const initialState = {
    gists: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const GistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GISTS_PENDING:
            return {
                ...state,
                gists: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_GISTS_FULFILLED:
            return {
                ...state,
                gists: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_GISTS_REJECTED:
            return {
                ...state,
                gists: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};