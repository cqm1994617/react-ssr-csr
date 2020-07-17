import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from '../route/index'
import { Provider } from 'react-redux'
import createor from '../store/index'
import { renderRoutes } from 'react-router-config'

const store = createor()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    )
  }
}
