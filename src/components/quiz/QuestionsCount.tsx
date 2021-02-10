import React from 'react'

export interface questionsCountProps{
    heading: string,
    color: string,
    count: number
}

const QuestionsCount:React.FC<questionsCountProps> = ({ heading, color, count }) => {
    return (
        <div className={`card ${color} text-white mb-3 col-md-4`}>
            <div className="card-header h5">{heading}</div>
            <div className="card-body">
                <h4 className="card-title h1 text-center">{count}</h4>
            </div>
        </div>
    )
}

export default QuestionsCount
