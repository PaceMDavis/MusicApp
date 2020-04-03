import React from 'react';
import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



const musicVolume = (props) => {
  console.log(props)
  // const tooLoud = () => {
  //   if(props.volume > 80) {
  //     return (
  //       <ul>Listening to music at a high volume could cause long-term hearing loss.</ul>
  //     )
  //   } else {
  //     return props.volume
  //   }
  // }
  return (
    <div>
      <Card>
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


export default musicVolume;