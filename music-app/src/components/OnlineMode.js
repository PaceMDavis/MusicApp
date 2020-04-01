import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'

const onlineMode = (props) => {
  return (
    <div>
      <Card>
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
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </CardActions>
    </Card>
    </div>
  )
}


export default onlineMode;