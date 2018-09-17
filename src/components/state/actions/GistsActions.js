import { fetchGistsByUsername, fetchGistDetails } from '../../../services/GistService';
import {
    FETCH_GISTS,
    FETCH_GIST_DETAILS
} from '../actions/types';


// ACTION GENERATORS


const fetchGistByusernameAction = (username) => ({
    type: FETCH_GISTS,
    payload: fetchGistsByUsername(username)
});

const fetchGistDetailsAction = (id) => ({
    type: FETCH_GIST_DETAILS,
    payload: fetchGistDetails(id)
});
// EXPORT ACTIONS

export { fetchGistByusernameAction, fetchGistDetailsAction };