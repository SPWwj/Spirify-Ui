// src/redux/actions/authActions.ts

import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';  // import your configured Store type here
import { AuthActionTypes, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from '../types/authTypes';
import TokenService from "authentication/TokenService";
import authService from "services/AuthService";

export const login = (
  username: string,
  password: string,
  rememberMe: boolean
): ThunkAction<Promise<boolean>, RootState, unknown, AuthActionTypes> => async dispatch => {
  const success = await authService.login(username, password, rememberMe);
  if (success) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: username,
    });
  }
  return success;
};


export const logout = (): AuthActionTypes => {
  authService.logout();
  return {
    type: LOGOUT,
  };
};

export const register = (username: string, email: string, password: string): ThunkAction<Promise<void>, RootState, unknown, AuthActionTypes> => async dispatch => {
  try {
    await authService.register(username, email, password);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: username,
    });
  } catch (error) {
    console.error("Registration failed:", error);
  }
};
