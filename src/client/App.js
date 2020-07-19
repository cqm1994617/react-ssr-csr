import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from '../route/index'
import { Provider } from 'react-redux'
import store from './store'
import { renderRoutes } from 'react-router-config'
import pathConfig from '../../path.config'

class MainRouter extends React.Component {

  render() {
    return renderRoutes(routes)
  }
}

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={pathConfig.publicPath}>
          <MainRouter />
        </BrowserRouter>
      </Provider>
    )
  }
}
