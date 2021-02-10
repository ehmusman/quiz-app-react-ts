import React from 'react'
import { useSelector } from '../../hooks/useTypedSelector'
import SortedAnswers from './SortedAnswers'


function GetSingleQuestion() {
    const questions = useSelector(state => state.questions.questions)
    const questionNumber = useSelector(state => state.questions.questionNumber)
    const getQuestion = questions[questionNumber]
    return (
        <div className='card bg-light text-dark mb-3'>
            {questions.length ? (
                <SortedAnswers
                    question={getQuestion.question}
                    answers={[getQuestion.correct_answer, ...getQuestion.incorrect_answers].sort(() => .5 - Math.random())}
                />

            ) : null}
        </div>
    )
}

export default GetSingleQuestion;
