export const searchResult = (data, id) => dispatch => {
    console.log(data, id)
    dispatch({
        type: 'MOVIE_DATA',
        payload: data,
        page: id
    })
}
