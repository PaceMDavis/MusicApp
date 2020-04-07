import React from 'react'
import { Switch, Route} from 'react-router'
import App from './App'
import Dashboard from './components/Dashboard'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/dash" component={Dashboard} />
    </Switch>
  )
}

export default Router;