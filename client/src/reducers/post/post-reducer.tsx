import { IActionPost } from "./post-action-types";

interface IState {
  posts: any[],
  post: any,
  loading: boolean,
  error: {}
}

const initialState: IState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export const postReducer = (state = initialState, action: IActionPost): typeof initialState => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.data,
        loading: false
      }
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post: any) => post._id !== action.data),
        loading: false
      }
    case 'POST_ERROR':
      return {
        ...state,
        error: action.data,
        loading: false
      }
    case 'UPDATE_LIKES':
      return {
        ...state,
        posts: state.posts.map((post: any) =>
          post._id === action.data.postId ? { ...post, likes: action.data.likes } : post
        ),
        loading: false
      }
    default:
      return state;
  };
}