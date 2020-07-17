import React from 'react'
import { BrowserRouter, withRouter } from 'react-router-dom'
import routes from '../route/index'
import { Provider } from 'react-redux'
import createor from '../store/index'
import { renderRoutes, matchRoutes } from 'react-router-config'

const store = createor()

const MainRouter = withRouter(class Main extends React.Component {

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      this.initalPropsWork()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.initalPropsWork()
    }
  }

  initalPropsWork() {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname)
    matchedRoutes.forEach(item => {
      if (item.route.getInitialProps) {
        item.route.getInitialProps(store)
      }
    })
  }

  render() {
    return renderRoutes(routes)
  }
})

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <MainRouter />
        </BrowserRouter>
      </Provider>
    )
  }
}
