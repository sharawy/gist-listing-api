import axios from 'axios';


const API_BASE_URL = 'https://api.github.com/';
// COMPONENT


export const fetchGistsByUsername = (username) => {
    const url = `${API_BASE_URL}users/${username}/gists`;

    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => response.data)
            .then((gists) => resolve(gists))
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};

export const fetchGistDetails = (id) => {
    const url = `${API_BASE_URL}gists/${id}`;

    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => response.data)
            .then((gist) => resolve(gist))
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};