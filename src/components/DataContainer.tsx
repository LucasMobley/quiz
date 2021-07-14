import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import QuestionCard from './QuestionCard';
import AnswerButton from './AnswerButton';
import PageNumber from './PageNumber';
import LandingPage from './LandingPage';
import Results from './Results';

const DataContainer: React.FC = () => {
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(res => res.json())
    .then(data => setQuestionInfo(data.results))
    .then(() => setIsLoading(false))
    .catch(err => console.error(err))
  }, []);
  
  const [isLoading, setIsLoading] = useState(true);
  const [questionInfo, setQuestionInfo] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0)

  const nextQuestion = (e) => {
    // console.log(answers, 'answers')
    // console.log(e.target.value, 'event target')
    // console.log(questionInfo[questionNumber - 1].correct_answer, 'question info')
    // console.log(score, 'score')
    if (questionNumber + 1 === 11) {
      //use react router to reroute
    }
    e.target.value === questionInfo[questionNumber - 1].correct_answer ? (
        setAnswers([...answers, "+"]),
        setScore(score + 1)
      ) : setAnswers([...answers, "-"]);
    setQuestionNumber(questionNumber + 1);   
  }
  
  if (isLoading) {
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <Router>
       <Switch>
        <Route exact path="/">
           <LandingPage />
        </Route>
        <Route exact path="/quiz">
          <QuestionCard
            question={questionInfo[questionNumber - 1].question}
            correctAnswer={questionInfo[questionNumber - 1].correct_answer}
            category={questionInfo[questionNumber - 1].category}
            questionNumber={questionNumber}
          />
          <AnswerButton nextQuestion={nextQuestion} />
          <PageNumber questionNumber={questionNumber} />
        </Route>

       
  
      </Switch>
      </Router>
    </div>
    
    
  )
};
export default DataContainer;
