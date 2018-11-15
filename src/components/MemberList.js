import React from 'react'
import Section from './Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'

const styles = {
  avatarStyle: {
    backgroundColor: 'blue'
  }
}

const MemberList = ({ members }) => {
  return (
    <Section title="Members">
      {members.length <= 0 ?
        <CircularProgress />
        :
        <List>
          {members.map((member, index) => (
            <Link key={member.name} to={`/user/${index + 1}`}>
              <ListItem button>
                <Avatar style={styles.avatarStyle}>{member.name[0].toUpperCase()}</Avatar>
                <ListItemText primary={member.name} secondary={member.tahunLahir} />
              </ListItem>
            </Link>
          ))}
        </List>
      }
    </Section>
  )
}

export default MemberList