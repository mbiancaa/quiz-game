import { useDispatch } from "react-redux";
import { resetState } from "../../store/slices/quizSlice";


const PlayAgainButton = (props) => {

    const dispatch = useDispatch();
    const { timer } = props;
    const playAgain = () => {
        dispatch(resetState())
        timer.reset();
    }

    return (
        <div
            className={`PlayAgainButton`}
            onClick={playAgain}
        >
            Play Again
        </div>
    );

}

export default PlayAgainButton;