import ProgressBarItem from "./ProgressBarItem";

const ProgressBar = (props) => {

    const { questions } = props;

    return (
        <div className="ProgressBar">
            {questions.map((key, index) => (
                <ProgressBarItem key={key} itemKey={index + 1} />
            ))}
        </div>
    )

}

export default ProgressBar;