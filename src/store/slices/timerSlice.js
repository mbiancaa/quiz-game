import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    seconds: 0,
    isRunning: false,
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        incrementTimer: (state) => {
            state.seconds += 1;
        },
        resetTimer: (state) => {
            state.seconds = initialState.seconds;
        }
    },
});

export const {
    startTimer,
    stopTimer,
    incrementTimer,
    resetTimer
} = timerSlice.actions;
export const selectTimer = (state) => state.timer;
export default timerSlice.reducer;