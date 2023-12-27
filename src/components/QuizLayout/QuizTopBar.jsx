import CloseQuizButton from "./CloseQuizButton";
import SkipQuestionButton from "../Question/SkipQuestionButton";

const QuizTopBar = () => {

    return (
        <div className="QuizTopBar">
            <CloseQuizButton />
            <SkipQuestionButton />
        </div>
    )

}

export default QuizTopBar;