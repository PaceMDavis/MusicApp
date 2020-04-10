import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



const MusicVolume = (props) => {


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
         Master Volume
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
      <Slider
        name="volume-slider"
        // defaultValue={30}
        value = {props.volume}
        onChange ={props.onChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      </CardActions>
    </Card>
    </div>
  )
}


export default MusicVolume;