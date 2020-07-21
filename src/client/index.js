import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { isClient } from '../util/index'

let render = () => {}

if (isClient) {
  render = ReactDOM.render
} else {
  render = process.env.NODE_ENV === 'development' ? ReactDOM.render : ReactDOM.hydrate
}

render(<App />, document.getElementById('app'))
