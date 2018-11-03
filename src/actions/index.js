export const searchResult = (data) => dispatch => {
    dispatch({
        type: 'MOVIE_DATA',
        payload: data
    })
}
