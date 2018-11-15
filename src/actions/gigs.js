import axios from 'axios'

export const fetchGigs = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films')
        .then(response => {
            const gigs = response.data.results
            .slice(0, 4)
            console.log('get the result')
            dispatch({
                type: 'ADD_GIGS',
                payload: {
                    gigs: gigs
                }
            })
        })
    }
}