import CloseQuizButton from "./CloseQuizButton";
import SkipQuestionButton from "../Question/SkipQuestionButton";

const QuizTopBar = (props) => {

    const { timer } = props;
    return (
        <div className="QuizTopBar">
            <CloseQuizButton timer={timer}/>
            <SkipQuestionButton />
        </div>
    )

}

export default QuizTopBar;