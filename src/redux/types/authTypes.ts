// src/redux/types/authTypes.ts

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;  // username
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: string;  // username
}

export type AuthActionTypes = LoginSuccessAction | LogoutAction | RegisterSuccessAction;

export interface AuthState {
  username: string;
}
