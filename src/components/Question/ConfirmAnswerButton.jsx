import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrentAnswer,
    selectCurrentQuestion,
    confirmSelectedAnswer,
    setCurrentAnswer,
    selectCorrectAnswer,
    pushCorrectAnswer,
    pushWrongAnswer
} from "../../store/slices/quizSlice";
import { useNextQuestion } from "../../customHooks/useNextQuestion";

const ConfirmAnswerButton = () => {

    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const currentAnswer = useSelector(selectCurrentAnswer);
    const correctAnswer = useSelector(selectCorrectAnswer);
    const [buttonConfirmationClass, setButtonConfirmationClass] = useState('');
    const nextQuestion = useNextQuestion();
    const confirmAnswer = () => {

        if (!currentAnswer) {
            alert("Select an answer");
            return;
        }

        if (currentAnswer === correctAnswer) {
            dispatch(pushCorrectAnswer({currentQuestion, currentAnswer}));
        } else {
            dispatch(pushWrongAnswer({currentQuestion, currentAnswer}));
        }

        dispatch(confirmSelectedAnswer({currentQuestion, currentAnswer}));
        setButtonConfirmationClass('Clicked');

        setTimeout(() => {
            dispatch(setCurrentAnswer(''));
            nextQuestion();
            setButtonConfirmationClass('');
        }, 2000);

    }

    return (
        <div
            onClick={confirmAnswer}
            className={`ConfirmAnswerButton ${buttonConfirmationClass}`}
        >
            Confirm
        </div>
    );
};

export default ConfirmAnswerButton;