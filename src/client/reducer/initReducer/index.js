import { IS_FIRST } from '../../actions/initAction'

const INIT_STATE = true

function initReducer(state = INIT_STATE, action) {
  switch(action.type) {
    case IS_FIRST.type:
      return false
    default:
      return state
  }
}

export default initReducer