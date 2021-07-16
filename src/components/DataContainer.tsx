import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route} from "react-router-dom";
import QuestionCard from './QuestionCard';
import LandingPage from './LandingPage';
import Results from './Results';

/*
This page is the parent of all other child components.  Because I want all of my
Data from the quiz API at the highest level of components to enable passing props downstream, I initiate a fetch here and 
then save my data in state. I fetch an array containing 10 objects.

When using the useEffect hook, the initial render of the page will have no data.  
My first useState hook, setIsLoading initializes isLoading to true. While isLoading is true we render loading... 
As soon as my third .then is executed isLoading becomes false and data is rendered to the page. This is perhaps less relevent with a
landing page but it seems good to be planning for the initial render.

Most of my busisness logic is rendered on each other component. See notes on those.

My nextQuestion function does much of my logic on this component, saving neccessary information to state.  

I will need to keep track of three things.
First, I need to track the total number of correct answers. I do this with a direct comparison using the value prop from my
True and False buttons from the AnswerButton component and a ternary operator
inside the nextQuestion function. I save those results in state as an intiger using the setScore and setAnswers hooks.
Second I need to save the corosponding - or + into state using the setAnswers hook. An array will enable easy access 
to these on my results page.
Third, I need to increment the question number of the question that we are on. The question number is 
initialized as 1 in state as questionNumber. 

Next I pass neccessary props to results and questionCard.
I also have a conditional to handel routing when we reach 10 questions.  This conditional renders the Results component

I also use React Router to handel routing from my landing page to QuestionCard (quiz page).

That covers most of the code and logic on this components.  See the others for mroe notes.
*/
const DataContainer: React.FC = () => {
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(res => res.json())
    .then(data => setQuestionInfo(data.results))
    .then(() => setIsLoading(false))
    .catch(err => console.error(err))
  }, []);
  
  const [questionInfo, setQuestionInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const nextQuestion = (e) => {
    e.target.value === questionInfo[questionNumber - 1].correct_answer ? (
      setAnswers([...answers, '+']),
      setScore(score + 1)
      ) : setAnswers([...answers, '-']);
    setQuestionNumber(questionNumber + 1);   
  }
  
  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (questionNumber + 1 > 11) {
    return (<Results 
      questions={questionInfo}
      answers={answers}
      score={score}
    />)
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/quiz">
          <QuestionCard
            question={questionInfo[questionNumber - 1].question}
            category={questionInfo[questionNumber - 1].category}
            questionNumber={questionNumber}
            nextQuestion={nextQuestion} 
          />
        </Route>
      </Switch>
    </div>
  )
};
export default DataContainer;
