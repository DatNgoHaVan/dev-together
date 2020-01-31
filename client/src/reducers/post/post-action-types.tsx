export interface IGetPosts {
  type: 'GET_POSTS',
  data: any
}

export interface IPostError {
  type: 'POST_ERROR',
  data: any
}

export interface IUpdateLikes {
  type: 'UPDATE_LIKES',
  data: {
    postId: string,
    likes: any
  }
}

export interface IDeletePost {
  type: 'DELETE_POST',
  data: any
}

export interface IAddPost {
  type: 'ADD_POST',
  data: any
}

export interface IGetPost {
  type: 'GET_POST',
  data: any
}

export interface IAddComment {
  type: 'ADD_COMMENT',
  data: any
}

export interface IDeleteComment {
  type: 'DELETE_COMMENT',
  data: any
}

export type IActionPost =
  IGetPosts | IPostError |
  IUpdateLikes | IDeletePost |
  IAddPost | IGetPost |
  IAddComment | IDeleteComment;