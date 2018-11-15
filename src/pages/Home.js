import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hero from '../components/Hero'
import Typography from '@material-ui/core/Typography'
import ArtistList from '../components/ArtistList'
import GigsList from '../components/GigsList'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { css } from 'emotion'
import amber from '@material-ui/core/colors/amber'

const styles = {
}

const theme = createMuiTheme({
    palette: {
        primary: amber,
    },
})

export default ({ gigs, artist }) => (
    <MuiThemeProvider theme={theme}>
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <Hero />
            </Grid>
            <Grid item xs={12}>
                <ArtistList artist={artist}/>
            </Grid>
        </Grid>
    </MuiThemeProvider>
)