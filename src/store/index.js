import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../client/reducer'

const creator = () => {
  const defaultStore = typeof window !== 'undefined' ? (window.__GLOBAL_STORE || {}) : {}
  return createStore(reducer, defaultStore, applyMiddleware(thunk))
}
export default creator
