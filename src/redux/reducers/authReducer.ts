
import {
  AuthActionTypes,
  AuthState,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from '../types/authTypes';

const initialState: AuthState = {
  username: '',
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        username: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        username: '',
      };
    default:
      return state;
  }
};
