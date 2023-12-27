import { useDispatch, useSelector } from "react-redux";
import {
    selectCorrectAnswers,
    selectCurrentQuestion,
    selectWrongAnswers,
    setCurrentQuestion,
} from "../store/slices/quizSlice";
import { QUESTIONS_NUMBER } from "../api/apiConfig";

export const useNextQuestion = () => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const correctAnswers = useSelector(selectCorrectAnswers);
    const wrongAnswers = useSelector(selectWrongAnswers);

    const getNextQuestionNumber = (current, max) => (current % max) + 1;

    return () => {

        let nextQuestionNumber;

        do {
            nextQuestionNumber = getNextQuestionNumber(
                nextQuestionNumber || currentQuestion,
                QUESTIONS_NUMBER
            );
        } while (
            correctAnswers.hasOwnProperty(nextQuestionNumber) ||
            wrongAnswers.hasOwnProperty(nextQuestionNumber)
            );

        dispatch(setCurrentQuestion(nextQuestionNumber));

    };
};