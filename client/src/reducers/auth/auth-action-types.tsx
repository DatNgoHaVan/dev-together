export interface IRegisterSuccess {
  type: 'REGISTER_SUCCESS',
  response: any,
}

export interface IRegisterFail {
  type: 'REGISTER_FAIL',
}

export interface IUserLoaded {
  type: "USER_LOADED",
  data: any
}

export interface IAuthError {
  type: 'AUTH_ERROR',
}

export interface ILoginSuccess {
  type: 'LOGIN_SUCCESS',
  response: any
}

export interface ILoginFail {
  type: 'LOGIN_FAIL',
}

export type IActionAuth =
  IRegisterSuccess |
  IRegisterFail |
  IUserLoaded |
  IAuthError |
  ILoginSuccess | ILoginFail;