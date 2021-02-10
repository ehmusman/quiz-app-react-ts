import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from '../../hooks/useTypedSelector';
import GetSingleQuestion from './GetSingleQuestion';
import QuestionsCount from './QuestionsCount'

const  GetQuestions: React.FC = () =>{
    const questions = useSelector(state => state.questions.questions)
    const questionNumber = useSelector(state => state.questions.questionNumber)
    const totalQuestions = questions.length;
    const currentQuestion = questionNumber + 1;
    const remainingQuestions = totalQuestions - currentQuestion;
    return (
        <>
        {questions.length !== 0 ? (
            <div className='container'>
                <div className="row align-items-center">
                    <QuestionsCount
                        heading='Total Questions'
                        color='bg-dark'
                        count={totalQuestions}
                    />
                    <QuestionsCount
                        heading='Question Number'
                        color='bg-success'
                        count={currentQuestion}
                    />

                    <QuestionsCount
                        heading='Remaining Question'
                        color='bg-danger'
                        count={remainingQuestions}
                    />
                </div>
                <GetSingleQuestion />
            </div >
        ) : (
                <div className="container">
                    <h1 className="text-dark">Please Select the <Link to='/categories' className="display-4 text-danger">categories</Link> first</h1>
                </div>
            )}

    </>
    )
}

export default GetQuestions;
