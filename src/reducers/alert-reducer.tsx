import { IActionAlert } from './alert-action-types';

const initialState: any = [];

export const alertReducer = (state = initialState, action: IActionAlert): typeof initialState => {
  switch (action.type) {
    case 'SET_ALERT':
      return [
        ...state,
        {
          alertMsg: action.alertMsg,
          alertType: action.alertType,
          id: action.id
        }
      ];
    case 'REMOVE_ALERT':
      return state.filter((alert: any) => alert.id !== action.id);
    default:
      return state;
  }
};