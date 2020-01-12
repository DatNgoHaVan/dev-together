import { Dispatch } from "redux";
import { IActionAuth } from "../reducers/auth/auth-action-types";
import axios from 'axios';
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

interface RegisterInputObject {
  name: string,
  email: string,
  password: string,
}

export const loadUser = (): any => {
  return async (dispatch: Dispatch<IActionAuth>) => {
    console.log(localStorage)
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
