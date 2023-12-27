import { useDispatch, useSelector } from "react-redux";
import {
    selectConfirmedAnswer,
    selectCorrectAnswer,
    selectCurrentAnswer,
    selectCurrentQuestion,
    setCurrentAnswer
} from "../../store/slices/quizSlice";

const Answer = (props) => {

    const { answerKey, answerText } = props;
    const dispatch = useDispatch();
    const currentAnswer = useSelector(selectCurrentAnswer);
    const currentQuestion = useSelector(selectCurrentQuestion);
    const confirmedAnswer = useSelector( (state) => selectConfirmedAnswer(state, currentQuestion));
    const correctAnswer = useSelector(selectCorrectAnswer);

    const selectAnswer = () => {
        if (currentAnswer === answerKey) {
            dispatch(setCurrentAnswer(''));
            return;
        }
        dispatch(setCurrentAnswer(answerKey));
    }

    const getAnswerClass = () => {
        let classes = 'Answer';

        if (currentAnswer === answerKey) {
            classes += ' isSelected';
        }

        if (confirmedAnswer) {
            classes += answerKey === correctAnswer ? ' isCorrect' : ' isWrong';
        }

        return classes;
    }


    return (
        <div
            className={getAnswerClass()}
            onClick={selectAnswer}
        >
            {`${answerKey}. ${answerText}`}
        </div>
    );
};

export default Answer;