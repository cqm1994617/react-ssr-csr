import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../client/pages/home'

export default () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
    </Switch>
  )
}
