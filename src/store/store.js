import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './slices/quizSlice';
import timerSlice from "./slices/timerSlice";

const store = configureStore({
    reducer: {
        quiz: quizSlice,
        timer: timerSlice
    },
});

export default store;