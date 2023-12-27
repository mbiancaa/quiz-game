import { useDispatch } from "react-redux";
import { resetState } from "../../store/slices/quizSlice";

const CloseQuizButton = () => {

    const dispatch = useDispatch();

    const closeQuiz = () => {
        dispatch(resetState());
    }

    return (
        <div
            onClick={closeQuiz}
            className="CloseQuizButton"
        >Close</div>
    )

}

export default CloseQuizButton;