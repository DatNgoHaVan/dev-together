import { IActionAlert } from './alert-action-types';

const initialState = {
  alertMsg: "",
  alertType: null
}

export const alertReducer = (state = initialState, action: IActionAlert): typeof initialState => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        alertMsg: action.alertMsg,
        alertType: action.alertType
      }
    case 'REMOVE_ALERT':
      return {
        ...state
      }
    default:
      return state;
  }
}