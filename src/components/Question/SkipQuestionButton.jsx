import { useSkipQuestion } from "../../customHooks/useSkipQuestion";

const SkipQuestionButton = () => {

    const skipThisQuestion = useSkipQuestion();

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