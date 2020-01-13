import { Dispatch } from "redux";
import { IActionAuth } from "../reducers/auth/auth-action-types";
import axios from 'axios';
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
import { IActionLogout } from "../reducers/auth/logout-action-types";

interface RegisterInputObject {
  name: string,
  email: string,
  password: string,
}

interface LoginInputObject {
  email: string,
  password: string,
}

export const loadUser = (): any => {
  return async (dispatch: Dispatch<IActionAuth>) => {

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: 'USER_LOADED',
        data: res.data
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR'
      })
    }
  }
}

// Register action
export const register = ({ name, email, password }: RegisterInputObject) => {
  return async (dispatch: Dispatch<IActionAuth | any>) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post('/api/users', body, config);

      dispatch({
        type: 'REGISTER_SUCCESS',
        response: res.data
      });

      dispatch(loadUser()); //for dispatching user's data
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger', 3000))
        }
        );
      }

      dispatch({
        type: 'REGISTER_FAIL'
      });
    }
  }
}

// Login action
export const login = ({ email, password }: LoginInputObject) => {
  return async (dispatch: Dispatch<IActionAuth | any>) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/auth', body, config);

      dispatch({
        type: 'LOGIN_SUCCESS',
        response: res.data
      });

      dispatch(loadUser()); //for dispatching user's data
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger', 3000))
        }
        );
      }

      dispatch({
        type: 'LOGIN_FAIL'
      });
    }
  }
}

//logout & Clear profile
export const logout = () => {
  return (dispatch: Dispatch<IActionLogout>) => {
    dispatch({ type: 'LOGOUT' })
  }
}