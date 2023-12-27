import { createSlice } from '@reduxjs/toolkit';

const quizInitialState = {
    topic: '',
    level: '',
    correctAnswers: {},
    wrongAnswers: {},
    answers: {},
    currentQuestion: 1,
    currentAnswer: '',
    correctAnswer: ''
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState: quizInitialState,
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        setLevel: (state, action) => {
            state.level = action.payload;
        },
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        setCurrentAnswer: (state, action) => {
          state.currentAnswer = action.payload;
        },
        setCorrectAnswer: (state, action) => {
          state.correctAnswer = action.payload;
        },
        pushCorrectAnswer: (state, action) => {
            const { currentQuestion, currentAnswer } = action.payload;
            state.correctAnswers[currentQuestion] = currentAnswer;
        },
        pushWrongAnswer: (state, action) => {
            const { currentQuestion, currentAnswer } = action.payload;
            state.wrongAnswers[currentQuestion] = currentAnswer;
        },
        confirmSelectedAnswer: (state, action) => {
            const { currentQuestion, currentAnswer } = action.payload;
            state.answers[currentQuestion] = currentAnswer;
        },
        resetState: (state) => {
            state.topic = quizInitialState.topic;
            state.level = quizInitialState.level;
            state.currentQuestion = quizInitialState.currentQuestion;
            state.currentAnswer = quizInitialState.currentAnswer;
            state.correctAnswer = quizInitialState.correctAnswer;
            state.correctAnswers = quizInitialState.correctAnswers;
            state.wrongAnswers = quizInitialState.wrongAnswers;
            state.answers = quizInitialState.answers;
        }
    },
});

export const {
    setTopic,
    setLevel,
    setCurrentQuestion,
    setCurrentAnswer,
    setCorrectAnswer,
    confirmSelectedAnswer,
    pushCorrectAnswer,
    pushWrongAnswer,
    resetState
} = quizSlice.actions;
export const selectTopic = (state) => state.quiz.topic;
export const selectLevel = (state) => state.quiz.level;
export const selectCorrectAnswers = (state) => state.quiz.correctAnswers;
export const selectWrongAnswers = (state) => state.quiz.wrongAnswers;
export const selectCurrentQuestion = (state) => state.quiz.currentQuestion;
export const selectCurrentAnswer = (state) => state.quiz.currentAnswer;
export const selectConfirmedAnswer = (state, currentQuestion) => state.quiz.answers[currentQuestion];
export const selectCorrectAnswer = (state) => state.quiz.correctAnswer;
export const selectNumberOfCorrectAnswers = (state) => Object.keys(state.quiz.correctAnswers).length;
export const selectNumberOfWrongAnswers = (state) => Object.keys(state.quiz.wrongAnswers).length;
export default quizSlice.reducer;