import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import getRoute from '../route/index'
import { Provider } from 'react-redux'
import createor from '../store/index'

const store = createor()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          {getRoute()}
        </BrowserRouter>
      </Provider>
    )
  }
}
