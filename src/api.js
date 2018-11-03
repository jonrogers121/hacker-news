import axios from 'axios';

export default {
    get: (t) =>
        axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: '3ef5089a',
                t,
            }
        }).then((response) => {
            return response
        }).catch((error) => {
                return error
            }
        ),
};

