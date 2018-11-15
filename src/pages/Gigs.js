import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { css } from 'emotion'

const styles = {
    gigsPage: {
        paddingTop: 100,
        paddingBottom: 220,
    },
}

export default class gigs extends Component {
    constructor(props) {
      super(props)

      this.state = {
        gigsData: null
      }
    }

    componentDidMount() {
      const { match } = this.props
      axios.get(`https://swapi.co/api/films/${match.params.id}`)
        .then( ({ data }) => {
          this.setState({
            gigsData: data
          })
        })
    }
    
    render() {
        const { gigsData } = this.state

        return gigsData ? (
            <main className={ css(styles.gigsPage) }>
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <Avatar 
                            style={{
                            width: 200,
                            height: 200,
                            fontSize: 80
                            }}
                        >
                            {gigsData.title.slice(0,2).toUpperCase()}
                        </Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            {gigsData.title}
                        </Typography>
                        <Typography variant="h6">
                            Birth Year: {gigsData.birth_year}
                        </Typography>
                        <Typography variant="h6">
                            Gender: {gigsData.gender}
                        </Typography>
                    </Grid>
                </Grid>
            </main>
    ) : <CircularProgress />
  }
}

gigs.propTypes = {
  classes: PropTypes.object.isRequired,
}