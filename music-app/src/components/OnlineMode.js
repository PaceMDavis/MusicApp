import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch'


// We are reporting whether or not it is online with a boolean
// If it is not online, we need to create a message and keep a tally of the message
//The message happens in the state.notifications array
const OnlineMode = (props) => {

  const useStyles = makeStyles (() => ({
    root: {
      height: '175px',
      padding: '15px'
    }
  }))
    
  const classes = useStyles()
  

  console.log(props)
  return (
    <div>
      <Card className= {classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Online Mode
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          Is this application connected to the Internet?
        </Typography>
      </CardContent>
      <CardActions>
      <Switch
        name="checked"
        onChange = {props.onChange}
        checked = {props.online}
        // value = {props.online}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </CardActions>
    </Card>
    </div>
  )
}


export default OnlineMode;