export const searchResult = (data, id) => dispatch => {
    console.log(data, id)
    dispatch({
        type: 'NEWS_DATA',
        payload: data,
        page: id
    })
}
