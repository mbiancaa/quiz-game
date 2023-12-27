import { useNextQuestion } from "../../customHooks/useNextQuestion";

const SkipQuestionButton = () => {

    const skipThisQuestion = useNextQuestion();

    return (
        <div
            className="SkipQuestionButton"
            onClick={skipThisQuestion}
        >
            Skip
        </div>
    );

};

export default SkipQuestionButton;