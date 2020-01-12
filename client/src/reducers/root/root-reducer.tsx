import { combineReducers } from 'redux';
import { alertReducer } from '../alert-reducer';
import { authReducer } from '../auth/auth-reducer';

export const RootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
})

export type StoreRootState = ReturnType<typeof RootReducer>