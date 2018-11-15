import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Section from './Section'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchArtist } from '../actions/artist'
import { css } from 'emotion'

const styles = {
    header: {
        marginTop:'10px',
        height:'30px',
        width:'20%'
    },
    whiteText: {
        color: '#fff',
    },
    listHeader: {
        backgroundColor: '#000',
        marginBottom: 20,
    },
    list: {
        backgroundColor: '#444',
        "&:hover": {
            backgroundColor: '#333',
        },
        marginBottom: 20,
    },
    schedule: {
        marginTop:'20px',
        height:'40px',
        width:'20%'
    },
    view: {
        marginTop:'5px',
        height:'40px',
        width:'20%'
    },
    buttonView: {
        width:'40'
    },
}

class ArtistList extends Component {
    componentDidMount() {
        console.log('panggil fetchArtist di componentDidMount')
        this.props.fetchArtist()
    }
  
    render() {
        const { artist } = this.props
        return (
            <Section title="CAST">
                {artist.length <= 0 ?
                    <CircularProgress />
                    :
                    
                    <List>
                        <ListItem className={ css(styles.listHeader) }>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>NAME</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>HEIGHT</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>MASS</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>BIRTH YEAR</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>INFO</Typography>
                            </ListItemText>
                        </ListItem>
                        {artist.map((artist, index) =>(
                            <ListItem className={ css(styles.list) }>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ artist.name }</Typography>
                                </ListItemText>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ artist.height }</Typography>
                                </ListItemText>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ artist.mass }</Typography>
                                </ListItemText>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ artist.birth_year }</Typography>
                                </ListItemText>
                                <Grid className={ css(styles.view) } align="center">
                                    <Link key={artist.name} to={`/artist/${index + 1}`}>
                                        <Button variant="contained" component="span">
                                            View
                                        </Button>
                                    </Link>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                }
            </Section>
        )
    }
}

const mapStateToProps = state => ({
    artist: state.artist.artistData
})

const mapDispatchToProps = dispatch => ({
    fetchArtist: () => dispatch(fetchArtist())
})

ArtistList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)