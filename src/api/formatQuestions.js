const patternForQuestion = /Question (\d+): (.*?)(?=(Question \d+|$))/g;
const patternForAnswers = /[A-D]\. (.*?)(?=(?:\s*[A-D]\.|Correct answer:|$))/g;
const patternForCorrectAnswer = /Correct answer: ([A-D])\./;
//TODO :: fix correct answers formatting, it throws err sometimes
export default function parseQuestions(text) {
    let match;
    const questions = {};
    text = text.replaceAll('\n', '');
    // console.log(text);
    while ((match = patternForQuestion.exec(text)) !== null) {
        const questionNumber = match[1];
        const questionText = match[2];
        questions[`Question ${questionNumber}`] = extractQuestionData(questionText.trim());
    }
    // console.log(questions);
    return questions;
}
function extractQuestionData(questionText) {
    let match;
    const answers = {};

    while ((match = patternForAnswers.exec(questionText)) !== null) {
        const answerText = match[1].trim();
        const answerKey = match[0].charAt(0);
        answers[answerKey] = answerText.replace(patternForCorrectAnswer, '');
    }

    const correctAnswerMatch = questionText.match(patternForCorrectAnswer);
    const correctAnswer = correctAnswerMatch ? correctAnswerMatch[1] : null;

    return {
        text: cleanQuestionText(questionText.trim()),
        answers: answers,
        correctAnswer: correctAnswer,
    };
}
function cleanTextFromAnswerPattern(text) {
    return text.replace(patternForAnswers, '');
}
function cleanTextFromCorrectAnswerPattern(text) {
    return text.replace(patternForCorrectAnswer, '').replace(/\s*Correct answer:\s*/, '');
}
function cleanQuestionText(text) {
    return cleanTextFromCorrectAnswerPattern(cleanTextFromAnswerPattern(text));
}