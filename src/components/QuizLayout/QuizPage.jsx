import QuizContainer from './QuizContainer';
import { useQuizData } from '../../customHooks/useQuizData';
import { useTimer } from '../../customHooks/useTimer';

const QuizPage = () => {

    const timer = useTimer();
    const { loading, quiz, error } = useQuizData(timer);

    return <QuizContainer loading={loading} quiz={quiz} error={error} timer={timer} />;
};

export default QuizPage;