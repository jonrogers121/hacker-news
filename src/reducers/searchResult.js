export default (state = {}, action) => {
    switch (action.type) {
        case 'MOVIE_DATA':
            return {
                data: action.payload
            }
        default:
            return state
    }
}