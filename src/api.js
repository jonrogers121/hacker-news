import axios from 'axios';

export default {
    get: (path, page) =>
        axios.get(`https://api.hnpwa.com/v0${path}/${page}.json`, {
        }).then((response) => {
            return response
        }).catch((error) => {
                return error
            }
        ),
};

