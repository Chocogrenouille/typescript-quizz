import { shuffleAnswerArray } from "./utils";

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string; 
}

export type completeQuestionsInfo = Question & {answers: string[]}

export const fetchQuizQuestions = async (
    amount: number, 
    difficulty: Difficulty
    ) => {
    const callToAPI = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(callToAPI)).json();
    return data.results.map((question: Question) => (
        {
            ...question, 
            answers: shuffleAnswerArray([...question.incorrect_answers, question.correct_answer]) 
        }
    ))
}

