import React, { MouseEvent }  from 'react';
import AnswerButton from './AnswerButton'
import PageNumber from './PageNumber'

type QuestionProps = {
  category: string;
  question: string;
  correctAnswer: string;
  questionNumber: number;
  nextQuestion: (e: MouseEvent) => void;
};
const QuestionCard: React.FC<QuestionProps> = ({category, question, correctAnswer, questionNumber, nextQuestion}) => (
  <div className='parentQuestionCard'>
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
