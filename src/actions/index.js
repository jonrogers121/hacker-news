export const searchResult = (data, firstLoad) => dispatch => {
    dispatch({
        type: 'NEWS_DATA',
        payload: data,
        load: firstLoad,
    })
}
