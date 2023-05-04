import { types } from '../Types/types'

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        nombre: action.payload
      }
    case types.logout:
      return {
        logged: false
      }
    default:
      return state
  }
}
