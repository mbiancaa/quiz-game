import { QUESTIONS_NUMBER } from "../../api/apiConfig";
import { useSelector } from "react-redux";
import {
    selectNumberOfCorrectAnswers,
    selectNumberOfWrongAnswers
} from "../../store/slices/quizSlice";

const ResultsBreakdown = () => {

    const correctAnswers = useSelector(selectNumberOfCorrectAnswers);
    const wrongAnswers = useSelector(selectNumberOfWrongAnswers);

    return (
        <div className={`ResultsBreakdown`}>
            <div className={`ResultsBreakdownItem`}>
                <span>{QUESTIONS_NUMBER}</span>
                <span>Total Questions</span>
            </div>
            <div className={`ResultsBreakdownItem`}>
                <span>10</span>
                <span>Time Completion</span>
            </div>
            <div className={`ResultsBreakdownItem`}>
                <span>{correctAnswers}</span>
                <span>Correct</span>
            </div>
            <div className={`ResultsBreakdownItem`}>
                <span>{wrongAnswers}</span>
                <span>Wrong</span>
            </div>
        </div>
    );

}

export default ResultsBreakdown;