import React from 'react';



const listAdd = event => {
  return (
    <div>
      <ul>
        {this.notifications.map((notes,index) => {
          let notification = this.state.notifications[index]
          return <div>
            <li key={index}>{notification}</li>
          </div>
        })}
      </ul>
    </div>
  )
}



export default listAdd