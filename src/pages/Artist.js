import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Hero from '../components/Hero'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { css } from 'emotion'

const styles = {
    artistPage: {
        paddingTop: 100,
        paddingBottom: 220,
    },
}

export default class Artist extends Component {
    constructor(props) {
      super(props)

      this.state = {
        artistData: null
      }
    }

    componentDidMount() {
      const { match } = this.props
      axios.get(`https://swapi.co/api/people/${match.params.id}`)
        .then( ({ data }) => {
          this.setState({
            artistData: data
          })
        })
    }
    
    render() {
        const { artistData } = this.state

        return artistData ? (
            <main className={ css(styles.artistPage) }>
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <Avatar 
                            style={{
                            marginLeft: 100,
                            width: 200,
                            height: 200,
                            fontSize: 80
                            }}
                        >
                            {artistData.name.slice(0,2).toUpperCase()}
                        </Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            Name: {artistData.name}
                        </Typography>
                        <Typography variant="h6">
                            Height: {artistData.height}
                        </Typography>
                        <Typography variant="h6">
                            Mass: {artistData.mass}
                        </Typography>
                        <Typography variant="h6">
                            Birth Year: {artistData.birth_year}
                        </Typography>
                    </Grid>
                </Grid>
            </main>
    ) : <CircularProgress />
  }
}

Artist.propTypes = {
  classes: PropTypes.object.isRequired,
}