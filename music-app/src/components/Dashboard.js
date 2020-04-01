import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OnlineMode from './OnlineMode'
import MusicVolume from './MusicVolume'
import SoundQuality from './SoundQuality'




class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
      notifications: []
    }
  }

  render() {
    return (
      <div class="dashboard">
        <div class="card">
          <OnlineMode />
        </div>
        <div class="card">
          <MusicVolume />
        </div>
        <div class="card">
          <SoundQuality />
        </div>
        
      </div>
    )
  }
}


export default Dashboard