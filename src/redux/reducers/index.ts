// src/redux/reducers/index.ts

import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
