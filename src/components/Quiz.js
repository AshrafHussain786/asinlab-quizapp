import React, {useState} from "react";
import QuizDetail from "./QuizDetail"
import Start from "./Start"

const Quiz = () => {
    const [detail, setDetail] =useState(true); 

    function showDetail() {
        setDetail(false)
    }

    return (
    <>
        {detail ? 
        ( <>
            <Start />
            <button className="btn btn-success" onClick={showDetail}>Start</button> 
         </> )
            : <QuizDetail /> }        
    </>
    )
}

export default Quiz;