export interface IGetProfile {
  type: 'GET_PROFILE',
  data: any
}

export interface IClearProfile {
  type: 'CLEAR_PROFILE',
}

export interface IProfileError {
  type: 'PROFILE_ERROR',
  data: any
}

export interface IUpdateProfile {
  type: 'UPDATE_PROFILE',
  data: any
}

export type IActionProfile =
  IGetProfile |
  IProfileError |
  IClearProfile |
  IUpdateProfile;