import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles, withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Section from './Section'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchGigs } from '../actions/gigs'
import { css } from 'emotion'
import { Typography } from '@material-ui/core';

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
        backgroundColor: '#133666',
        marginBottom: 20,
    },
    list: {
        backgroundColor: '#143b72',
        "&:hover": {
            backgroundColor: '#1c4e96',
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

class GigsList extends Component {
    componentDidMount() {
        this.props.fetchGigs()
    }

    render() {
        const { gigs, classes } = this.props
        return (
            <Section title="GIGS">
                { 
                    gigs.length <= 0 ?
                    <CircularProgress />
                    :
                    <List>
                        <ListItem className={ css(styles.listHeader) }>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>DATE</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>EVENT</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>LOCATION</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>ARTIST</Typography>
                            </ListItemText>
                            <ListItemText align="center" className={ css(styles.header) } >
                                <Typography className={ css(styles.whiteText) }>INFO</Typography>
                            </ListItemText>
                        </ListItem>
                        {gigs.map((gigs) => (
                            <ListItem className={ css(styles.list) }>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ gigs.release_date }</Typography>
                                </ListItemText>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ gigs.title }</Typography>
                                </ListItemText>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ gigs.director }</Typography>
                                </ListItemText>
                                <ListItemText align="center" color="primary" className={ css(styles.schedule) }>
                                    <Typography className={ css(styles.whiteText) }>{ gigs.producer }</Typography>
                                </ListItemText>
                                <Grid className={ css(styles.view) } align="center">
                                    <Button variant="contained" component="span" color="primary" className={ css(styles.buttonView) }>
                                        View
                                    </Button>
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
    gigs: state.gigs.gigsList
})

const mapDispatchToProps = {
    fetchGigs: fetchGigs
}

GigsList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(GigsList)