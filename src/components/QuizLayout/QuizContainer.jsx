import QuestionCard from '../Question/QuestionCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import ConfirmAnswerButton from '../Question/ConfirmAnswerButton';
import QuizTopBar from './QuizTopBar';
import { useSelector } from "react-redux";
import { selectCurrentQuestion } from "../../store/slices/quizSlice";
import Loader from "react-js-loader";
import { QUESTIONS_NUMBER } from "../../api/apiConfig";
import Results from "../Results/Results";
import ErrorMessage from "./ErrorMessage";
import { useEffect } from "react";

const QuizContainer = (props) => {

    const { loading, quiz, error, timer } = props;
    const currentQuestion = useSelector(selectCurrentQuestion);
console.log(currentQuestion);
    useEffect(() => {
        if (currentQuestion > QUESTIONS_NUMBER) timer.stop();
    }, [currentQuestion, timer]);

    return (
        <div className="QuizContainer">
            {currentQuestion > QUESTIONS_NUMBER ? (
                <Results timer={timer} />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : !loading && quiz ? (
                <>
                    <QuizTopBar timer={timer}/>
                    <ProgressBar questions={Object.keys(quiz)} />
                    <div className="QuestionCards">
                        {Object.keys(quiz).map((questionKey, index) => (
                            currentQuestion === index + 1 && (
                                <QuestionCard
                                    key={index}
                                    questionData={quiz[questionKey]}
                                />
                            )
                        ))}
                    </div>
                    <ConfirmAnswerButton />
                </>

            ) : (
                <div className={`LoaderContainer`}>
                    <Loader type="bubble-top" bgColor={`#DDA0DD`} color={`#DDA0DD`} size={35} />
                </div>
            )}
        </div>
    );

};

export default QuizContainer;