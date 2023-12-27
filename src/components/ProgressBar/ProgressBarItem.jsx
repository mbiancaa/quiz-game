import { useSelector } from "react-redux";
import {
    selectCorrectAnswers,
    selectCurrentQuestion,
    selectWrongAnswers,
} from "../../store/slices/quizSlice";
import CheckMarkIcon from '../../assets/icons/checkmark.svg';
import CrossIcon from '../../assets/icons/cross.svg';

const ProgressBarItem = (props) => {

    const { itemKey } = props;

    const currentQuestion = useSelector(selectCurrentQuestion);
    const correctAnswers = useSelector(selectCorrectAnswers);
    const wrongAnswers = useSelector(selectWrongAnswers);

    const getText = () => {
        if (correctAnswers.hasOwnProperty(itemKey)) {
            return <img src={CheckMarkIcon} alt="Correct" />;
        } else if (wrongAnswers.hasOwnProperty(itemKey)) {
            return <img src={CrossIcon} alt="Wrong" />;
        }
        return itemKey;
    }

    const getClasses = () => {
        let classes = 'ProgressBarItem';
        if (itemKey === currentQuestion) classes += ' current';
        if ( correctAnswers.hasOwnProperty(itemKey) || wrongAnswers.hasOwnProperty(itemKey) ) classes += ' answered';
        return classes;
    }

    return (
        <div className={getClasses()}>{getText()}</div>
    );

};

export default ProgressBarItem;