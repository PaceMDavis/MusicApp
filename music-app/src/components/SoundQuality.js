import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const SoundQuality = (props) => {

const useStyles = makeStyles (() => ({
  root: {
    height: '175px',
    padding: '15px'
  }
}))
  
const classes = useStyles()


  return (
    <div>
      <Card className= {classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sound Quality
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          Manually control the music quality in the event of a poor connection
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl>
        <Select name = "quality-select" onChange = {props.onChange} value={props.quality}>
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Normal</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
    </Card>
    </div>
  )
}


export default SoundQuality;