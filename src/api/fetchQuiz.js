import {
    API_KEY,
    API_URL,
    QUESTIONS_NUMBER
} from "./apiConfig";
import parseQuestions from "./formatQuestions";

const getQuestionsPrompt = (topic, level) => `Generate ${QUESTIONS_NUMBER} ${level}-level multiple-choice questions with 4 answers about ${topic}. Mark each question with numbers (1-${QUESTIONS_NUMBER}) like "Question 1" and each answer with uppercase letters (A-D) like "A.". Also mark the correct answer with "Correct answer:". Please ensure that each question is clear and relevant to the given topic. If any question is missing the numbering or if there are fewer than ${QUESTIONS_NUMBER} questions, kindly correct it in the response. Example: "Question 1: What is your first question about ${topic}? A. What topic? B. Can I ask more questions? C. I have no questions. D. Let's start without questions. Correct answer: A. What topic?"`;

export default async function generateQuestions(topic, level) {

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: getQuestionsPrompt(topic, level),
            max_tokens: 600
        })
    });

    const data = await response.json();
    return parseQuestions(data.choices[0].text);
}