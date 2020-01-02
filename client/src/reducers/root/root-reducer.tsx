import { combineReducers } from 'redux';
import { alertReducer } from '../alert-reducer';

export const RootReducer = combineReducers({
  alert: alertReducer
})

export type StoreRootState = ReturnType<typeof RootReducer>