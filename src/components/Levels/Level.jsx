import { useDispatch } from "react-redux";
import { setLevel } from "../../store/slices/quizSlice";

const Level = (props) => {

    const { level } = props;

    const dispatch = useDispatch();

    const selectLevel = () => {
        dispatch(setLevel(level));
    }

    return (
        <div
            className={`Level ${level}`}
            onClick={selectLevel}
        >{level}</div>
    );

}

export default Level;