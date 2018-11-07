export default (state = {}, action) => {
    const stateData = state.data || null
    switch (action.type) {
        case 'NEWS_DATA':
            return {
                data: stateData ? stateData.concat(action.payload) : action.payload
            }
        default:
            return state
    }
}
