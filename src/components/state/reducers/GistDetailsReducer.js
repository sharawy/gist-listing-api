import {
    FETCH_GIST_DETAILS_PENDING,
    FETCH_GIST_DETAILS_FULFILLED,
    FETCH_GIST_DETAILS_REJECTED
} from '../actions/types';


// INITIALIZE STATE

const initialState = {
    gist: {},
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const GistDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GIST_DETAILS_PENDING:
            return {
                ...state,
                gist: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_GIST_DETAILS_FULFILLED:
            return {
                ...state,
                gist: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_GIST_DETAILS_REJECTED:
            return {
                ...state,
                gist: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};