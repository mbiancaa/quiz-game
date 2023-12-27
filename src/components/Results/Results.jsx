import PlayAgainButton from "./PlayAgainButton";
import ResultsBreakdown from "./ResultsBreakdown";
import Score from "./Score";

const Results = (props) => {

    const { timer } = props;
    return (
        <div className={`ResultsContainer`}>
            <Score />
            <ResultsBreakdown />
            <PlayAgainButton timer={timer}/>
        </div>
    );

}

export default Results;