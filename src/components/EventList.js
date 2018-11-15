import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Section from './Section'

const EventList = ({ events }) => (
  <Section title="Past Meetups">
    {events.length <= 0 ?
      <CircularProgress />
      :
      <Grid container spacing={16}>
        {events.map(event =>(
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="caption" gutterBottom>
                  {event.date}
                </Typography>
                <Typography variant="title" gutterBottom>
                  {event.title}
                </Typography>
                <Typography>
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  }
  </Section>
)

export default EventList