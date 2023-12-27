import { useDispatch } from "react-redux";
import { resetState } from "../../store/slices/quizSlice";


const PlayAgainButton = () => {

    const dispatch = useDispatch();
    return (
        <div
            className={`PlayAgainButton`}
            onClick={() => dispatch(resetState())}
        >
            Play Again
        </div>
    );

}

export default PlayAgainButton;