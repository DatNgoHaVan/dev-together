import axios from 'axios';
import { setAlert } from './alert';
import { IActionProfile } from '../reducers/profile/profile-action-types';
import { Dispatch } from 'redux';

export const getCurrentProfile = () => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const res = await axios.get('/api/profile/me');

      dispatch({
        type: 'GET_PROFILE',
        data: res.data
      });
    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
}

// Create or update profile
export const createProfile = (formData: any, history: any, edit: boolean = false) => {
  return async (dispatch: Dispatch<IActionProfile | any>) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await axios.post('/api/profile', formData, config);

      dispatch({
        type: 'GET_PROFILE',
        data: res.data
      });

      dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

      if (!edit) {
        history.push('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger', 3000))
        }
        );
      }

      dispatch({
        type: 'PROFILE_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
}