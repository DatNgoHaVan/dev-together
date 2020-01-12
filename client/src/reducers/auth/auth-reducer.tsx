import { IActionAuth } from './auth-action-types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null
}

export const authReducer = (state = initialState, action: IActionAuth): typeof initialState => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.response.token);
      return {
        ...state,
        ...action.response,
        isAuthenticated: true,
        loading: false,
      };
    case 'REGISTER_FAIL':
    case 'AUTH_ERROR':
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.data
      }
    default:
      return state
  }
}