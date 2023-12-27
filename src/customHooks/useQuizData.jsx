import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLevel, selectTopic } from '../store/slices/quizSlice';
import generateQuestions from '../api/fetchQuiz';

export const useQuizData = (timer) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const topic = useSelector(selectTopic);
    const level = useSelector(selectLevel);
    const [quiz, setQuiz] = useState({});

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const data = await generateQuestions(topic, level);
                setQuiz(data);
                timer.start();
                // console.log(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchQuizData();
    }, [topic, level]);

    return { loading, quiz, error };
};