
export interface questionsI {
category: string,
type: string,
difficulty: string,
question: string,
correct_answer: string,
incorrect_answers: string[]
}
export interface answersI{
    question: string,
    answer: string
}

export interface initialStateI {
    questions: questionsI[];
    questionNumber: number;
    getAnswers: answersI[],
correctAnswers: answersI[],
}
export enum ActionTypes {
    GET_QUESTIONS,
    NEXT_QUESTION,
    GET_ANSWER,
    QUIZ_FINISH
}
export interface getQuestionsActionI{
    type: ActionTypes.GET_QUESTIONS
    payload: questionsI[]
}
export interface getNextQuestionActionI{
    type: ActionTypes.NEXT_QUESTION
}
export interface getAnswerActionI{
    type: ActionTypes.GET_ANSWER,
    payload: answersI
}
export interface quizFinishActionI{
    type: ActionTypes.QUIZ_FINISH
}

export interface categoriesDataI {
    amount: number,
    category: number,
    difficulty: string
}



export type Actions = 
getQuestionsActionI | 
getNextQuestionActionI | 
getAnswerActionI | 
quizFinishActionI