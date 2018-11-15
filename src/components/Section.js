import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { css } from 'emotion'

const styles = {
    background: {
        paddingLeft: 160,
        paddingRight: 160,
        paddingTop: 60,
        paddingBottom: 40,
        // backgroundColor: 'rgba(0,0,0,1)',
    }
}

const Section = ({
    title,
    children,
}) => (
    <section className={css(styles.background)}>
        <Typography className={css(styles.titleText)} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {title}
        </Typography>
        {children}
    </section>
)

export default Section