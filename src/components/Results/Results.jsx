import PlayAgainButton from "./PlayAgainButton";
import ResultsBreakdown from "./ResultsBreakdown";
import Score from "./Score";

const Results = () => {

    return (
        <div className={`ResultsContainer`}>
            <Score />
            <ResultsBreakdown />
            <PlayAgainButton />
        </div>
    );

}

export default Results;