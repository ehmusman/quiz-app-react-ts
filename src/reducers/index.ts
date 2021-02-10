import {combineReducers} from 'redux';
import reducer from './quizReducer';

const reducers = combineReducers({
    questions: reducer
})

export default reducers;
export type RootState = ReturnType<typeof reducers>