import Topics from "../Topics/Topics";
import Levels from "../Levels/Levels";
import QuizContainer from "./QuizContainer";
import { useSelector } from "react-redux";
import { selectLevel, selectTopic } from "../../store/slices/quizSlice";

const QuizStarter = () => {

    const topic = useSelector(selectTopic);
    const level = useSelector(selectLevel);

    return (
        <>
            {topic && level ? (
                <QuizContainer />
            ) : topic ? (
                <Levels />
            ) : (
                <Topics />
            )}
        </>
    );

}
export default QuizStarter;