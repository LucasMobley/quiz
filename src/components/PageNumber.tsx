import React from 'react';

type QuestionNumber = {
  questionNumber: number;
};

const PageNumber: React.FC<QuestionNumber> = ({ questionNumber }) => (
  <div className="number">
    <p>{questionNumber} of 10</p>
  </div>
);

export default PageNumber;
