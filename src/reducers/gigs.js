const initialState = {
    gigsList: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_GIGS':
        return {
            ...state,
            gigsList: action.payload.gigs
        }

        default: return state
    }
}