import axios from 'axios'

export const addArtist = (artist) => ({
    type: 'ADD_ARTIST',
    payload: {
        artist: artist
    }
})

export const fetchArtist = () => {
    console.log('function addArtist')
    return (dispatch) => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            const artist = response.data.results
            .slice(0, 4)
            console.log('get the result')
            dispatch({
                type: 'ADD_ARTIST',
                payload: {
                    artist: artist
                }
            })
        })
    }
}