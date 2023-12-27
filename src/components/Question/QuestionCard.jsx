import Question from "./Question";
import Answers from "./Answers";
import { useDispatch, useSelector } from "react-redux";
import { selectLevel, selectTopic, setCorrectAnswer } from "../../store/slices/quizSlice";
import { useEffect } from "react";

const QuestionCard = (props) => {

    const { questionData } = props;

    const dispatch = useDispatch();
    const topic = useSelector(selectTopic);
    const level = useSelector(selectLevel);

    useEffect(() => {
        dispatch(setCorrectAnswer(questionData.correctAnswer));
    }, []);

    return (
        <div className="QuestionCard">
            <span className="QuestionCardTopic">{topic} - {level}</span>
            <Question text={`${questionData.text}`}/>
            <Answers answers={questionData.answers} />
        </div>
    );

}

export default QuestionCard;