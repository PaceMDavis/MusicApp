import React from 'react';


function ListComponent (props) {
  // const notifications = props.notifications
  console.log(props.notifications)
  return (
    <div>
      <h2>System Notifications:</h2>
      <ul>
    {props.notifications.map((notification, index) => {
      console.log(notification.notifications, "birds")
      return <div key={index}>
        <li >{notification}</li>
      </div>
    })}
    </ul>
    </div>
    )
}

export default ListComponent;