import Answer from "./Answer";

const Answers = (props) => {

    const { answers } = props;

    return (
        <div className="AnswersContainer">
            {Object.keys(answers).map((answerKey, index) => (
                <Answer
                    key={index}
                    answerKey={answerKey}
                    answerText={answers[answerKey]}
                />
            ))}
        </div>
    );

};

export default Answers;