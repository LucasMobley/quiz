import React from 'react';
import AnswerButton from './AnswerButton'

type QuestionProps = {
  category: string;
  question: string;
  correctAnswer: string;
  questionNumber: number;
};
const QuestionCard: React.FC<QuestionProps> = ({category, question, correctAnswer, questionNumber}) => (
  <div>
    <div className="questionCard">
      <h5>{category}</h5>
      <div>
        <p>{question}</p>
      </div>
    </div>

  </div>

);

export default QuestionCard;
