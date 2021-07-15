import React from 'react';

/*
This is a simple component that recievs the questionNumber prop from DataContainer and renders it as a 
<p> inside a <div>.
*/
type QuestionNumber = {
  questionNumber: number;
};

const PageNumber: React.FC<QuestionNumber> = ({ questionNumber }) => (
  <div className="number">
    <p>{questionNumber} of 10</p>
  </div>
);

export default PageNumber;
