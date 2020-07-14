import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import getRoute from '../common/route'

export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter basename="/">
        {getRoute()}
      </BrowserRouter>
    )
  }
}
