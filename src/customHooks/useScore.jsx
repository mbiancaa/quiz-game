import { useSelector } from "react-redux";
import { selectNumberOfCorrectAnswers, selectNumberOfWrongAnswers } from "../store/slices/quizSlice";
import { CORRECT_ANSWER_POINTS, WRONG_ANSWER_POINTS } from "../constants/score";

export const useScore = () => {

    const correctAnswers = useSelector(selectNumberOfCorrectAnswers);
    const wrongAnswers = useSelector(selectNumberOfWrongAnswers);

    return  (correctAnswers * CORRECT_ANSWER_POINTS) + (wrongAnswers * WRONG_ANSWER_POINTS);

}