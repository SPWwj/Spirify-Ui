import * as signalR from "@microsoft/signalr";

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpeechItem } from 'models/SpeechItem';
import TextToSpeechService from "services/TextToSpeechService";

interface SpeechItemsState {
    speechItems: SpeechItem[];
    isLoading: boolean;
    error: string | null | undefined;
    connectionState: signalR.HubConnectionState;

}

export interface AddSpeechItemPayload {
    speechItem: SpeechItem;
    shouldSaveToDb: boolean;
}


const initialState: SpeechItemsState = {
    speechItems: [],
    isLoading: false,
    error: null,
    connectionState: signalR.HubConnectionState.Disconnected

};

const speechItemsSlice = createSlice({
    name: 'speechItems',
    initialState,
    reducers: {
        addSpeechItem: (state, action: PayloadAction<SpeechItem>) => {
            state.speechItems.push(action.payload);
            state.isLoading = false;
        },
        updateSpeechItem: (state, action: PayloadAction<SpeechItem>) => {
            const index = state.speechItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index !== -1) {
                state.speechItems[index] = { ...action.payload };
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setConnectionState: (state, action) => {
            state.connectionState = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpeechItems.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSpeechItems.fulfilled, (state, action: PayloadAction<SpeechItem[]>) => {
                state.speechItems = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchSpeechItems.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },
});

// Export actions and reducer
export const {
    setConnectionState,
    addSpeechItem,
    updateSpeechItem,
    setIsLoading,
} = speechItemsSlice.actions;

export default speechItemsSlice.reducer;



export const fetchSpeechItems = createAsyncThunk<SpeechItem[]>(
    'speechItems/fetchSpeechItems',
    async (_, { rejectWithValue }) => {
        try {

            const response = await TextToSpeechService.getInstance().getAllLocalAudioData();
            // If response is undefined, return an empty array
            return response || [];
        } catch (err) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);



