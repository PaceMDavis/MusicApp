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
  // constructor(props) {
  //   super(props)
    state = {
      online: true,
      volume: 30,
      quality: '20',
      notifications: [],
      message: ''
    }
    // this.listAdd = this.listAdd.bind(this)
    // this.switchToggle = this.switchToggle.bind(this)
  // }


  switchToggle = event => {
    const message = "Your application is offline. You won't be able to share or stream music to other devices. if switch is turned offline."   
    const newOnline = !this.state.online
    this.setState({
      online: newOnline
    })
  
    if(newOnline === false) {
      this.setState({
        notifications: [...this.state.notifications, message]
      })
    }
    console.log(newOnline)
  }

  volumeToggle = (event, newValue) => {
    const message = "Listening to music at a high volume could cause long-term hearing loss."
    this.setState({
      volume: newValue,
    })
    if(newValue > 80) {
      this.setState({
        notifications: [...this.state.notifications, message]
      })
    }
  
  }

  qualityToggle = (event) => {
    const message = "Music quality is degraded. Increase quality if your connection allows it."
    this.setState({
      quality: event.target.value
    })
    
  
    if(event.target.value === 10) {
      this.setState({
        notifications: [...this.state.notifications, message]
      })
    }
  
  }

  // notificationUpdate = event => {
  //   event.preventDefault()
  //   this.setState({
  //     notifications: [...this.state.notifications, this.state.message]
  //   })
  // }

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
            <SoundQuality onChange={this.qualityToggle} quality={this.state.quality}/>
          </div>
        </div>
        <br/>
        <div>
          <h2>System Notifications:</h2>
            <div>
              {this.state.notifications}
            </div>
          {/* {notifications} */}
        </div>
      </div>
    )
  }
}


export default Dashboard