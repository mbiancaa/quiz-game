import QuestionCard from '../Question/QuestionCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import ConfirmAnswerButton from '../Question/ConfirmAnswerButton';
import QuizTopBar from './QuizTopBar';
import { useQuizData } from '../../customHooks/useQuizData';
import { useSelector } from "react-redux";
import { selectCurrentQuestion } from "../../store/slices/quizSlice";
import Loader from "react-js-loader";
import { QUESTIONS_NUMBER } from "../../api/apiConfig";
import Results from "../Results/Results";

const QuizContainer = () => {

    const { loading, quiz } = useQuizData();
    const currentQuestion = useSelector(selectCurrentQuestion);

    return (
        <div className="QuizContainer">
            {currentQuestion > QUESTIONS_NUMBER ? (
                <Results />
            ) : !loading && quiz ? (
                <>
                    <QuizTopBar />
                    <ProgressBar questions={Object.keys(quiz)} />
                    <div className="QuestionCards">
                        {Object.keys(quiz).map((questionKey, index) => (
                            currentQuestion === index+1 && (
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