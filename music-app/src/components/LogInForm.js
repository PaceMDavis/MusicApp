import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import App from '../App'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .makeStyles-root-74': {
//       width: '50px',
//       // background: 'black'
//     }
//   }
// }))


const LogInForm = (props) => {
  // const classes = useStyles();
  console.log(props)
  return(
  <div>
    <form class="form" onSubmit={props.onSubmit} name="login" value={props.loggedIn}>
      <TextField 
        required id="standard-required" 
        label="Username" 
        name="username" 
        value={props.textField} 
        onChange={props.onInput}
      />
      <br />
      <TextField 
        id="standard-password-input" 
        type="password" 
        label="Password*" 
        name="password" 
        value={props.textField} 
        onChange={props.onInput} 
      />
      <br /> 
      <Button id="button-login" type="submit">LOGIN</Button>
    </form>
  </div>
  )
}

export default LogInForm;