import React from 'react'

function wrapper(Component) {

  return class extends React.Component {

    state = {
      finish: false
    }

    async componentDidMount() {
      if (Component.getInitialProps) {
        await Component.getInitialProps()
        this.setState({
          finish: true
        })
      }
    }

    render() {
      console.log(this.props)
      if (this.state.finish) {
        return (
          <Component {...this.props} />
        )
      }
      return <div>loading</div>
    }

  }
}


export default wrapper
