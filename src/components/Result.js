import React from 'react'
import QuizArray from "./QuizArray";

const totalQuestions = QuizArray.length;


const Result = ({score}) => {
    return (
        <div>
            <h1>You scored {score} out of {totalQuestions} </h1>
        </div>
    )
}

export default Result
