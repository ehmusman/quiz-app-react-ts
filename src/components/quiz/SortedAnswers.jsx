import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAnswer, getNextQuestion } from '../../actions/quizActions';
import { useSelector } from '../../hooks/useTypedSelector';
import Result from './Result';

function SortedAnswers(props) {
    const questions = useSelector(state => state.questions.questions)
    const questionNumber = useSelector(state => state.questions.questionNumber)
    const dispatch = useDispatch();
    const [selectAnswer, setSelectAnswer] = useState('');
    const [isNextQuestion, setIsNextQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false)
    const { question, answers } = props

    const selectedAnswer = (e) => {
        setSelectAnswer(e.target.value)
    }
    const handleNextQuestion = () => {


        if (selectAnswer !== '') {
            if (questionNumber + 2 === questions.length) {
                dispatch(getNextQuestion())
                setIsNextQuestion(false)
                dispatch(getAnswer({
                    question,
                    answer: selectAnswer
                }))
                setSelectAnswer('')
            } else {
                dispatch(getNextQuestion())
                dispatch(getAnswer({
                    question,
                    answer: selectAnswer
                }))
                setSelectAnswer('')
            }
        } else if (selectAnswer === '') {
            alert('Kindly Select one option')
        }
    }
    const handleSubmit = () => {
        if (selectAnswer !== '') {
            setShowResult(true)
            dispatch(getAnswer({
                question,
                answer: selectAnswer
            }))
            setSelectAnswer('')
        } else if (selectAnswer === '') {
            alert('Kindly Select one option')
        }
    }
    return (
        <>
            {showResult ? (<Result />) : (
                <>
                    <div className="card-header">Multiple Choice Questions</div>
                    <div className="card-body">
                        <h4 className="card-title">{question}</h4>
                        <div
                            className="form-check list-group">
                            {answers.map(ans => (
                                <label
                                    key={ans}
                                    className="form-check-label list-group-item">
                                    <input
                                        type="radio" className="form-check-input"
                                        value={ans}
                                        name='answer'
                                        onClick={selectedAnswer}
                                    />
                                    {ans}
                                </label>
                            ))}
                        </div>
                        {isNextQuestion ? (
                            <input
                                type="submit"
                                value="Next Question"
                                className="btn btn-outline-dark btn-lg btn-block mt-3"
                                onClick={handleNextQuestion}
                            />
                        ) : (
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-outline-dark btn-lg btn-block mt-3"
                                    onClick={handleSubmit}
                                />
                            )}

                    </div>
                </>
            )}
        </>
    )
}


export default SortedAnswers;
