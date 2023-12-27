import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrentAnswer,
    selectCurrentQuestion,
    confirmSelectedAnswer,
    setCurrentAnswer,
    setCurrentQuestion,
    selectCorrectAnswer, pushCorrectAnswer, pushWrongAnswer
} from "../../store/slices/quizSlice";

const ConfirmAnswerButton = () => {

    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const currentAnswer = useSelector(selectCurrentAnswer);
    const correctAnswer = useSelector(selectCorrectAnswer);
    const [buttonConfirmationClass, setButtonConfirmationClass] = useState('');

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
            dispatch(setCurrentQuestion(currentQuestion + 1));
            setButtonConfirmationClass('');
        }, 3000);

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