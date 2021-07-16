import React, {MouseEvent} from 'react';
import { useHistory } from "react-router-dom";

/*
This page receives props from DataContainer. It has one button element that sends users back to the home page on click.
I map over my questions array, using that index # to also access the answers array containing - and +.
There are a fair number of class names used here (although still minimal) for neccessary styling to this page.


*/

type ResultProps = {
  questions: any[];
  answers: string[];
  score: number;
};

const Results: React.FC<ResultProps> = ({questions, answers, score}) => {
  const start = useHistory();
  function playAgain() {
    start.push("/");
    location.reload();
  }
  const results = questions.map((el, index) => {
    return (
    <div 
      className="result"
      key={index}
    >
      <p className="answerSymbol">{answers[index]}</p> 
      <p className="questionText">{el.question}</p> 
    </div>
    )
  });
  return (
    <div className="resultsPage">
      <p>You scored</p>
      <h1>{score} / 10</h1>
      <p>{results}</p>
      <button className="playagain" onClick={playAgain}>PLAY AGAIN?</button>
    </div>
  )
}

export default Results;