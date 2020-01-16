import { combineReducers } from 'redux';
import { alertReducer } from '../alert-reducer';
import { authReducer } from '../auth/auth-reducer';
import { profileReducer } from '../profile/profile-reducer';

export const RootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer
})

export type StoreRootState = ReturnType<typeof RootReducer>