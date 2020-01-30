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

export type IActionPost =
  IGetPosts | IPostError |
  IUpdateLikes | IDeletePost;