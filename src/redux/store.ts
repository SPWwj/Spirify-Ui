import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import speechItemsReducer from './slices/speechItemsSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        speechItems: speechItemsReducer,
    },
    middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;