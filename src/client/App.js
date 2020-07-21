import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from '../route/index'
import { Provider } from 'react-redux'
import store from './store'
import { renderRoutes } from 'react-router-config'
import pathConfig from '../../path.config'

class MainRouter extends React.Component {

  componentDidMount() {
    window.__STOP_GET_INITIAL_PROPS = 0
  }

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
