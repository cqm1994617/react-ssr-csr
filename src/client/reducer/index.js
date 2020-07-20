import {combineReducers} from 'redux'
import homeReducer from './homeReducer'
import initReducer from './initReducer'
import csrListReducer from './csrListReducer'
import ssrListReducer from './ssrListReducer'

export default combineReducers({
  homeReducer,
  initReducer,
  csrListReducer,
  ssrListReducer
})
