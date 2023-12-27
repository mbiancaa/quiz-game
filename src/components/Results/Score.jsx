import { useScore } from "../../customHooks/useScore";

const Score = () => {

    const score = useScore();

    return (
        <div className={`ScoreContainer`}>
            <div className={`ScoreWrapper`}>
                <span>Your score</span>
                <span className={`Score`}>{score}</span>
            </div>
        </div>
    );

}

export default Score;