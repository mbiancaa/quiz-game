import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './slices/quizSlice';
import timerSlice from "./slices/timerSlice";

const store = configureStore({
    reducer: {
        timer: timerSlice,
        quiz: quizSlice,
    },
});

export default store;