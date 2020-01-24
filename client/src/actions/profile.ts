import axios from 'axios';
import { setAlert } from './alert';
import { IActionProfile } from '../reducers/profile/profile-action-types';
import { Dispatch } from 'redux';
import { IActionAuth } from '../reducers/auth/auth-action-types';

// Get current user profiles
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
};

// Get all profiles
export const getProfiles = () => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    dispatch({ type: 'CLEAR_PROFILE' });

    try {
      const res = await axios.get('/api/profile');

      dispatch({
        type: 'GET_PROFILES',
        data: res.data
      });
    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Get profile by ID
export const getProfileById = (userId: string) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const res = await axios.get(`/api/profile/user/${userId}`);

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
};

// Get Github repos
export const getGithubRepos = (username: string) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const res = await axios.get(`/api/profile/github/${username}`);

      dispatch({
        type: 'GET_REPOS',
        data: res.data
      });
    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Create or update profile
export const createProfile = (formData: any, history: any, edit: boolean = false) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
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
};

// Add Experience
export const addExperience = (formData: any, history: any) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await axios.put('/api/profile/experience', formData, config);

      dispatch({
        type: 'UPDATE_PROFILE',
        data: res.data
      });

      dispatch(setAlert('Experience Added', 'success'));

      history.push('/dashboard');

    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger', 3000))
        });
      }

      dispatch({
        type: 'PROFILE_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Add Education
export const addEducation = (formData: any, history: any) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await axios.put('/api/profile/education', formData, config);

      dispatch({
        type: 'UPDATE_PROFILE',
        data: res.data
      });

      dispatch(setAlert('Education Added', 'success'));

      history.push('/dashboard');

    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(setAlert(error.msg, 'danger', 3000))
        });
      }

      dispatch({
        type: 'PROFILE_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Delete Experience
export const deleteExperience = (id: string) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const res = await axios.delete(`/api/profile/experience/${id}`);

      dispatch({
        type: 'UPDATE_PROFILE',
        data: res.data
      });

      dispatch(setAlert('Experience Removed', 'success', 4000));

    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        data: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
    }
  }
};

// Delete Experience
export const deleteEducation = (id: string) => {
  return async (dispatch: Dispatch<IActionProfile>) => {
    try {
      const res = await axios.delete(`/api/profile/education/${id}`);

      dispatch({
        type: 'UPDATE_PROFILE',
        data: res.data
      });

      dispatch(setAlert('Education Removed', 'success', 4000));

    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        data: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
    }
  }
};

// Delete Account & Profile
export const deleteAccount = (id: string) => {
  return async (dispatch: Dispatch<IActionProfile | IActionAuth>) => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        const res = await axios.delete(`/api/profile`);

        dispatch({
          type: 'CLEAR_PROFILE'
        });

        dispatch({
          type: 'DELETE_ACCOUNT'
        });

        dispatch(setAlert('Your account has been permanently deleted', 'success', 4000));

      } catch (err) {
        dispatch({
          type: 'PROFILE_ERROR',
          data: {
            msg: err.response.statusText,
            status: err.response.status
          }
        });
      }
    }
  }
};