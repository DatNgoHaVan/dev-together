import { IActionProfile } from "./profile-action-types";

const intitialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export const profileReducer = (state = intitialState, action: IActionProfile): typeof intitialState => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        profile: action.data,
        loading: false
      };
    case 'PROFILE_ERROR':
      return {
        ...state,
        error: action.data,
        loading: false
      };
    case 'CLEAR_PROFILE':
      return intitialState;
    default:
      return state;
  }

}