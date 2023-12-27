export const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
export const API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
/* TODO:: Switch to the new API -> test prompts & fix responses ( correct answer is null sometimes because of formatting)
* Maybe try paid versions of OpenAI
* export const API_URL = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';
 */
export const QUESTIONS_NUMBER = 10;