import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../client/reducer'
import { isClient } from '../util/index'

const creator = () => {
  const defaultStore = isClient() ? (window.__GLOBAL_STORE || {}) : {}
  return createStore(reducer, defaultStore, applyMiddleware(thunk))
}
export default creator
