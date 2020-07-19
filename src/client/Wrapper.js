import React from 'react'
import { connect } from 'react-redux'
import { IS_FIRST } from './actions/initAction'
import store from './store'

function wrapper(Component) {

  const WrapComponent = connect(
    state => ({
      isFirst: state.initReducer
    }),
    (dispatch) => ({
      init: () => {
        dispatch(IS_FIRST)
      }
    })
  )(class Wrap extends React.Component {
    state = {
      canRender: false
    }
    async componentDidMount() {
      const { isFirst, init } = this.props
      if (isFirst) {
        //初次加载时走的是服务端的getInitialProps，所以客户端不必再执行一遍getInitialProps，直接渲染出来即可
        init()
        this.setState({
          canRender: true
        })
      } else if (Component.getInitialProps) {
        await Component.getInitialProps(store)
        this.setState({
          canRender: true
        })
      }
    }

    render() {
      console.log(this.state.canRender)
      if (typeof window === 'undefined') {
        return <Component {...this.props} />
      }
      if (this.state.canRender) {
        return (
          <Component {...this.props} />
        )
      }
      return <div>loading...</div>
    }
  })


  WrapComponent.getInitialProps = Component.getInitialProps

  return WrapComponent

}


export default wrapper
