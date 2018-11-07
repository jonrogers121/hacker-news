export default (state = {}, action) => {
    const stateData = state.data ||  null
    const refreshData = !stateData || action.load
    switch (action.type) {
        case 'NEWS_DATA':
            return {
                data: refreshData ? action.payload : stateData.concat(action.payload)
            }
        default:
            return state
    }
}
