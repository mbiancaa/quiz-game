import { useDispatch } from "react-redux";
import { setTopic } from "../../store/slices/quizSlice";

const Topic = (props) => {

    const { topic } = props;

    const dispatch = useDispatch();

    const selectTopic = () => {
        dispatch(setTopic(topic));
    }

    return (
        <div
            className="Topic"
            onClick={selectTopic}
        >{topic}</div>
    );

}

export default Topic;