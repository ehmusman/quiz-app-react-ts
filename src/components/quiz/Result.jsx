import React from 'react'
import { useDispatch } from 'react-redux'
import { quizFinish } from '../../actions/quizActions'
import { Link } from 'react-router-dom'
import { useSelector } from '../../hooks/useTypedSelector'

function Result() {
    const questions = useSelector(state => state.questions.questions)
    const correctAnswers = useSelector(state => state.questions.correctAnswers)
    const dispatch = useDispatch();
    const retakeQuiz = () => {
        dispatch(quizFinish())
    }
    return (
        <>
            <div className="card-header display-4">Result</div>
            <div className="card-body">
                <h4 className="card-title">
                    Total Score is <br />
                    <span className="text-sanger display-2">{correctAnswers.length}</span> <span className='display-4 mx-4'>out of</span>
                    <span className="text-sanger display-2">{questions.length}</span>
                </h4>
                <button
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    onClick={retakeQuiz}
                >
                    <Link to='/categories'></Link>
                    Retake Quiz
                    </button>
            </div>

        </>
    )
}

export default Result;
