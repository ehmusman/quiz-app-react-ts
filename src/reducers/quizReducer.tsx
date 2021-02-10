import { Actions, ActionTypes, initialStateI } from "../actions/types"

const initialState: initialStateI = {
questions: [],
questionNumber: 0,
getAnswers: [],
correctAnswers: [],
}

const reducer = (state: initialStateI = initialState, action: Actions) => {
    switch(action.type){
        case ActionTypes.GET_QUESTIONS:
            return{
                ...state,
                questions: action.payload
            }
            case ActionTypes.NEXT_QUESTION:
                return {
                    ...state,
                    questionNumber: state.questionNumber + 1
                }
            case ActionTypes.GET_ANSWER:
                let i;
                for (i = 0; i < state.questions.length; i++) {
                    if (state.questions[i].question === action.payload.question) {
                        if (state.questions[i].correct_answer === action.payload.answer) {
                            return {
                                ...state,
                                correctAnswers: [action.payload, ...state.correctAnswers],
                                getAnswers: [action.payload, ...state.getAnswers]
                            }
                        }
                        else {
                            return {
                                ...state,
                                getAnswers: [action.payload, ...state.getAnswers]
                            }
                        }
                    }
                }
                break;
            case ActionTypes.QUIZ_FINISH:
                return {
                    ...state,
                    questions: [],
                    questionNumber: 0,
                    getAnswers: [],
                    correctAnswers: [],
                }
        default:
            return state;
    }
}

export default reducer;