import React, { MouseEvent }  from 'react';
import AnswerButton from './AnswerButton'
import PageNumber from './PageNumber'

/*
This is the component that contains the QuestionCard, AnswerButton and PageNumber component.
It receives neccessary props from DataContainer.  The most styling (although minimal) is done using
the classNames assigned on this page.
*/

type QuestionProps = {
  category: string;
  question: string;
  questionNumber: number;
  nextQuestion: (e: MouseEvent) => void;
};
const QuestionCard: React.FC<QuestionProps> = ({category, question, questionNumber, nextQuestion}) => (
  <div className="parentQuestionCard">
    <h5>{category}</h5>
    <br/>
    <div className="childQuestionCard">
      <div>
        <p>{question}</p>
      </div> 
    </div>
    <AnswerButton nextQuestion={nextQuestion}/>
    <PageNumber questionNumber={questionNumber}/>
  </div>

);

export default QuestionCard;
