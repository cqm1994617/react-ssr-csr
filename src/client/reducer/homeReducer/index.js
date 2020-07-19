import { HOME_ADD } from '../../actions/homeAction'

const INIT_STATE = 0

function homeReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case HOME_ADD.type:
      return state + 1
    default:
      return state
  }
}

export default homeReducer