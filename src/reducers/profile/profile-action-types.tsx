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

export interface IGetProfiles {
  type: 'GET_PROFILES',
  data: any
}

export interface IGetRepos {
  type: 'GET_REPOS',
  data: any
}

export type IActionProfile =
  IGetProfile | IGetProfiles | IGetRepos |
  IProfileError |
  IClearProfile |
  IUpdateProfile;