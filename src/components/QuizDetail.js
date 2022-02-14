import React, { useState, useEffect } from "react";
import QuizArray from "./QuizArray";
import Result from "./Result";

const QuizDetail = () => {
  const [curQuestion, setCurQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [selected, setSelected] = useState("");
  const [index, setIndex] = useState()
  
  const createMarkup = (text) => {
    return { __html: text };
  };

  function nextQuestion () {
    if (!selected) {
      alert('Please select one answer !');
      return false;
    } else {
    setCurQuestion(curQuestion + 1);
    setSelected("")    
    setIndex()
  }
}

  function tryAgain() {
    setCurQuestion(0);
  }

  function getAnswer (i, ans) {     
    // console.log("index",i);   
    setIndex(i)
    setSelected(ans)
    const correct = QuizArray[curQuestion].correct_answer === ans     
    if (correct) { setScore((score) => score + 1)
                  //  console.log("Selected is ", ans)
        }
    // console.log("Score is ", score)    
  };

  useEffect(() => {
    if (curQuestion < QuizArray.length) {
    setAllAnswers(
    [...QuizArray[curQuestion].incorrect_answers,
     QuizArray[curQuestion].correct_answer,
    ].sort(() => Math.random() - 0.5)
  
  );
  // console.log("No in Use Effect", curQuestion)
    }
  // eslint-disable-next-line
  }, [curQuestion]);

  return (
    <div className="flex-container">
      {curQuestion < QuizArray.length ? (
        <div
          className="card bg-light"
          style={{ textAlign: "center", maxWidth: "40rem" }}
        >
          <div className="card-body">
            <div>
              <p className="text-left">{QuizArray[curQuestion].category} </p>
            </div>
            <div>
              <h4 className="text-left">
                {" "}
                <b>
                  {" "}
                  Question: {curQuestion + 1} / {QuizArray.length}
                </b>
              </h4>
            </div>
            <div>
              <p className="text-left">{QuizArray[curQuestion].difficulty}</p>              
              {/* <i className="fa fa-star" style={{width: "10px", height: "10px"}} ></i>*/}
              {/* {<FontAwesomeIcon icon="fas fa-star" />} */}
            </div>
            <div className="question" style={{ fontSize: "25px" }}>
              {QuizArray[curQuestion].question} ?
            </div>
            <br />
            <div className="card flex-container" style={{ fontSize: "20px" }}>
                <div className="card-columns" style={{maxWidth: "50rem", alignContent: "center", textAlign: "center"}}>                
                {allAnswers.map((ans,i) => {
                    return (
                      <div key={i} onClick={() => {
                        getAnswer(i, ans);
                      }}
                      className={`card bg-light 
                                  ${index === i ? ans === QuizArray[curQuestion].correct_answer ? "correct" : "wrong":""}`} 
                                  style={{textAlign: "center"}} value={ans} >                                        
                        {ans}
                      </div>
                    );
                  })}
                </div>
            </div>
            <div>                          
              <button className="btn btn-dark" onClick={nextQuestion}>
                Next Question
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <h2>
            <Result score={score} />{" "}
          </h2>
          <div>          
            <button className="btn btn-dark" onClick={tryAgain}>
                Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizDetail;
