import { useDispatch } from "react-redux";
import { resetState } from "../../store/slices/quizSlice";

const CloseQuizButton = (props) => {

    const { timer } = props;
    const dispatch = useDispatch();

    const closeQuiz = () => {
        dispatch(resetState());
        timer.reset();
    }

    return (
        <div
            onClick={closeQuiz}
            className="CloseQuizButton"
        >Close</div>
    )

}

export default CloseQuizButton;