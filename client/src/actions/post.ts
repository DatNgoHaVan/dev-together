import axios from 'axios';
import { setAlert } from './alert';
import { Dispatch } from 'react';
import { IActionPost } from '../reducers/post/post-action-types';

// Get posts
export const getPosts = () => {
  return async (dispatch: Dispatch<IActionPost>) => {
    try {
      const res = await axios.get('/api/posts');

      dispatch({
        type: 'GET_POSTS',
        data: res.data
      });

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};

// Add likes
export const addLike = (postId: string) => {
  return async (dispatch: Dispatch<IActionPost>) => {
    try {
      const res = await axios.put(`/api/posts/like/${postId}`);

      dispatch({
        type: 'UPDATE_LIKES',
        data: { postId: postId, likes: res.data }
      });

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};

// Remove likes
export const removeLike = (postId: string) => {
  return async (dispatch: Dispatch<IActionPost>) => {
    try {
      const res = await axios.put(`/api/posts/unlike/${postId}`);

      dispatch({
        type: 'UPDATE_LIKES',
        data: { postId: postId, likes: res.data }
      });

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};

// Delete post
export const deletePost = (postId: string) => {
  return async (dispatch: Dispatch<IActionPost>) => {
    try {
      const res = await axios.delete(`/api/posts/${postId}`);

      dispatch({
        type: 'DELETE_POST',
        data: postId
      });

      dispatch(setAlert('Post Removed', 'success', 4000));

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};