import axios from 'axios';
import { Actions, ActionTypes, answersI, categoriesDataI } from './types';
import {Dispatch} from 'redux'

export const getQuestions = (data: categoriesDataI) => {
    return async (dispatch : Dispatch<Actions>) => {
        const res = await axios.get(`https://opentdb.com/api.php?amount=${data.amount}&category=${data.category}&difficulty=${data.difficulty}&type=multiple`)
        dispatch({
            type: ActionTypes.GET_QUESTIONS,
            payload: res.data.results
        })
    };
}


export const getNextQuestion = ():Actions => {
    return ({
        type: ActionTypes.NEXT_QUESTION,
    })
};
export const getAnswer = (data: answersI):Actions => {
    return ({
        type: ActionTypes.GET_ANSWER,
        payload: data
    })
};

export const quizFinish = ():Actions => {
    return ({
        type: ActionTypes.QUIZ_FINISH
    })
}