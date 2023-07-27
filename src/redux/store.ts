import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<Promise<ReturnType>, RootState, any, Action<string>>;


export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction> | ((action: AnyAction | AppThunk) => AnyAction | AppThunk);
