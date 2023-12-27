import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLevel, selectTopic } from '../store/slices/quizSlice';
import generateQuestions from '../api/fetchQuiz';

export const useQuizData = () => {
    const [loading, setLoading] = useState(true);
    const topic = useSelector(selectTopic);
    const level = useSelector(selectLevel);
    const [quiz, setQuiz] = useState({});

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const data = await generateQuestions(topic, level);
                setQuiz(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching quiz:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizData();
    }, [topic, level]);

    return { loading, quiz };
};