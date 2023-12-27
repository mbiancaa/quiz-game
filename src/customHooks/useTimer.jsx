import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    incrementTimer,
    resetTimer,
    selectTimer,
    startTimer,
    stopTimer
} from "../store/slices/timerSlice";
import { useEffect } from "react";

export const useTimer = () => {

    const { seconds, isRunning } = useSelector(selectTimer);
    const dispatch = useDispatch();

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                dispatch(incrementTimer());
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };

    }, [dispatch, isRunning]);

    const start = () => {
        dispatch(startTimer());
    };

    const stop = () => {
        dispatch(stopTimer());
    };

    const reset = () => {
        dispatch(resetTimer());
    };

    return { seconds, isRunning, start, stop, reset };

}
