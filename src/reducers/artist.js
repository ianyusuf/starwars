const initialState = {
    artistData: [],
    artistTotal: 0,
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTIST':
            return {
              ...state,
              artistData: action.payload.artist,
            }

        default:
            return state
    }
}

export default artistReducer