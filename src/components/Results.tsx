import React, {MouseEvent} from 'react';
import { useHistory } from "react-router-dom";

type ResultProps = {
  questions: any[];
  answers: string[];
  score: number;
};

const Results: React.FC<ResultProps> = ({questions, answers, score}) => {
  const start = useHistory();
  function playAgain() {
    start.push(`/`);
    location.reload();
  }
  const results = questions.map((el, index) => {
    return (
    <div 
      className="result"
      key={index}
    >
      <p className='answerSymbol'>{answers[index]}</p> 
      <p className='questionText'>{el.question}</p> 
    </div>
    )
  });
  return (
    <div className="resultsPage">
      <p>You scored</p>
      <h1>{score} / 10</h1>
      <p>{results}</p>
      <button onClick={playAgain}>PLAY AGAIN?</button>
    </div>
  )
}

export default Results;