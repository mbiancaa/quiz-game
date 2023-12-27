import { QUESTIONS_NUMBER } from "../../api/apiConfig";
import { useSelector } from "react-redux";
import {
    selectNumberOfCorrectAnswers,
    selectNumberOfWrongAnswers
} from "../../store/slices/quizSlice";
import { selectSeconds } from "../../store/slices/timerSlice";
import { formatTime } from "../../helpers/formatTime";

const ResultsBreakdown = () => {

    const correctAnswers = useSelector(selectNumberOfCorrectAnswers);
    const wrongAnswers = useSelector(selectNumberOfWrongAnswers);
    const seconds = useSelector(selectSeconds);

    return (
        <div className={`ResultsBreakdown`}>
            <div className={`ResultsBreakdownItem`}>
                <span>{QUESTIONS_NUMBER}</span>
                <span>Total Questions</span>
            </div>
            <div className={`ResultsBreakdownItem`}>
                <span>{formatTime(seconds)}</span>
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