import {combineReducers} from 'redux'
import homeReducer from './homeReducer'
import initReducer from './initReducer'

export default combineReducers({
  homeReducer,
  initReducer
})
