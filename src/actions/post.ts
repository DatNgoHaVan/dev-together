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
      await axios.delete(`/api/posts/${postId}`);

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

// Add post
export const addPost = (formData: any) => {
  return async (dispatch: Dispatch<IActionPost>) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`/api/posts`, formData, config);

      dispatch({
        type: 'ADD_POST',
        data: res.data
      });

      dispatch(setAlert('Post Created', 'success', 4000));

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};

// Get posts
export const getPost = (postId: string) => {
  return async (dispatch: Dispatch<IActionPost>) => {
    try {
      const res = await axios.get(`/api/posts/${postId}`);

      dispatch({
        type: 'GET_POST',
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

// Add comment
export const addComment = (postId: string, formData: any) => {
  return async (dispatch: Dispatch<IActionPost>) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);

      dispatch({
        type: 'ADD_COMMENT',
        data: res.data
      });

      dispatch(setAlert('Comment Added', 'success', 4000));

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};

// Delete comment
export const deleteComment = (postId: string, commentId: string) => {
  return async (dispatch: Dispatch<IActionPost>) => {

    try {
      await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

      dispatch({
        type: 'DELETE_COMMENT',
        data: commentId
      });

      dispatch(setAlert('Comment Removed', 'success', 4000));

    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        data: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
};