import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    heroUnit: {
        paddingTop: 40,
        paddingBottom: 100,
    },
    heroContent: {
        maxWidth: 800,
        paddingTop: 100,
        paddingBottom: 100,
        margin: '0 auto',
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
})

function Hero(props) {
    const { classes } = props;

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        STAR WARS
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Star Wars is a series of science-fiction movies by George Lucas. As of December 2017, nine movies have been made through the company, Lucasfilm Ltd, released by 20th Century Fox, and distributed by United International Pictures. In these movies, robots are called droids, taken from the English word android (meaning human-like), even though many of them do not have a very human appearance. Some of the main heroes and villains in the movies use energy swords called lightsabers that can cut almost anything.
                    </Typography>
                    {/* <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <Button variant="contained">
                                    Artist Name
                                </Button>
                            </Grid>
                        </Grid>
                    </div> */}
                </div>
            </main>
        </Fragment>
    );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero)