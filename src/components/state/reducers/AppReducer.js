// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { GistsReducer } from './GistsReducer';
import { GistDetailsReducer } from './GistDetailsReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    gists: GistsReducer,
    gist:GistDetailsReducer
});