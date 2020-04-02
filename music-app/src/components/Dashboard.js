import React from 'react';
// import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import OnlineMode from './OnlineMode'
import MusicVolume from './MusicVolume'
import SoundQuality from './SoundQuality'




class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
      volume: 30,
      quality: '20',
      notifications: [],
      message: ''
    }
    // this.listAdd = this.listAdd.bind(this)
    this.switchToggle = this.switchToggle.bind(this)
  }


  switchToggle = event => {
    event.preventDefault()
    this.setState({
      online: !this.state.online
    })
  }

  volumeToggle = event => {
    event.preventDefault()
    let tempObject = {[event.target.name]:Number(event.target.value)}
    this.setState({
      volume: Number(event.target.value)
    })
  }

  notificationUpdate = event => {
    event.preventDefault()
    this.setState({
      notifications: [...this.state.notifications, this.state.message]
    })
  }

  render() {
    // const notifications = this.state.notifications;
    // console.log(this.state.online, "birds")
    return (
      <div>
        <div className="dashboard">
          <div className="card">
            <OnlineMode onChange={this.switchToggle} online={this.state.online}/>
          </div>
          <div className="card">
            <MusicVolume onChange ={this.volumeToggle} volume ={this.state.volume} />
          </div>
          <div className="card">
            <SoundQuality />
          </div>
        </div>
        <br/>
        <div>
          <h2>System Notifications:</h2>
          {notifications}
        </div>
      </div>
    )
  }
}


export default Dashboard