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
      })
    }
  }
}