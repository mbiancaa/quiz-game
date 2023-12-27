import Topics from "../Topics/Topics";
import Levels from "../Levels/Levels";
import { useSelector } from "react-redux";
import { selectLevel, selectTopic } from "../../store/slices/quizSlice";
import QuizPage from "./QuizPage";

const QuizStarter = () => {

    const topic = useSelector(selectTopic);
    const level = useSelector(selectLevel);

    return (
        <>
            {topic && level ? (
                <QuizPage />
            ) : topic ? (
                <Levels />
            ) : (
                <Topics />
            )}
        </>
    );

}
export default QuizStarter;