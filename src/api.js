import axios from 'axios';

export default {
    get: (page) =>
        axios.get(`https://api.hnpwa.com/v0/news/${page}.json`, {
        }).then((response) => {
            return response
        }).catch((error) => {
                return error
            }
        ),
};

