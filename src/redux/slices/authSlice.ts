// src/redux/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from 'redux/store';
import authService from "services/AuthService";

interface AuthState {
  username: string;
}

const initialState: AuthState = {
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    clearUserName: (state) => {
      state.username = '';
    },
  },
});

export const { setUserName, clearUserName } = authSlice.actions;

export const login = (username: string, password: string, rememberMe: boolean): AppThunk<boolean> => async (dispatch: AppDispatch) => {
  const success = await authService.login(username, password, rememberMe);
  if (success) {
    dispatch(setUserName(username));
  }
  return success; // Return success status
};

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
  authService.logout();
  dispatch(clearUserName());
};

export const register = (username: string, email: string, password: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await authService.register(username, email, password);
    dispatch(setUserName(username));
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export default authSlice.reducer;
