const Question = (props) => {

    const { text } = props;

    return (
        <div className="Question">{text}</div>
    );

}

export default Question;