import { combineReducers } from 'redux';
import { alertReducer } from '../alert-reducer';
import { authReducer } from '../auth/auth-reducer';
import { profileReducer } from '../profile/profile-reducer';
import { postReducer } from '../post/post-reducer';

export const RootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer,
  post: postReducer
});

export type StoreRootState = ReturnType<typeof RootReducer>