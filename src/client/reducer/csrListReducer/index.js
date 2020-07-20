import { SET_LIST } from '../../actions/csrListAction'

const INIT_STATE = []

function initReducer(state = INIT_STATE, action) {
  switch(action.type) {
    case SET_LIST.type:
      return [...action.payload]
    default:
      return state
  }
}

export default initReducer