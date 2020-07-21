import React from 'react'
import store from './store'
import { isClient } from '../util'

function wrapper(Component) {

  class WrapComponent extends React.Component {
    state = {
      canRender: false
    }
    async componentDidMount() {
      if (window.__STOP_GET_INITIAL_PROPS === 1) {
        this.setState({
          canRender: true
        })
      } else if (Component.getInitialProps) {
        await Component.getInitialProps(store)
        this.setState({
          canRender: true
        })
      } else {
        this.setState({
          canRender: true
        })
      }
    }

    render() {
      if (!isClient()) {
        return <Component {...this.props} />
      }
      if (this.state.canRender) {
        return (
          <Component {...this.props} />
        )
      }
      return <div>执行getInitialProps中...</div>
    }
  }

  WrapComponent.getInitialProps = Component.getInitialProps

  return WrapComponent

}


export default wrapper
