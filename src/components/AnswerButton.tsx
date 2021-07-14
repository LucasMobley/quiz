import React, { MouseEvent } from 'react';

type ButtonProps = {
  nextQuestion: (event: MouseEvent) => void;
}

const AnswerButton: React.FC<ButtonProps> = (props) => (
  <div className="buttons">
    <button onClick={props.nextQuestion} value="False">
      False
    </button>

    <button onClick={props.nextQuestion} value="True">
      True
    </button>
  </div>
);

export default AnswerButton;
