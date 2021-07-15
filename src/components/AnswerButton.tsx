import React, { MouseEvent } from 'react';

/*
This small component receives nextQuestion props from DataContainer via questionCard.
It contains html that will render two buttons for True and False.
The value property from each button is used on DataContainer to determine if a users answer is correct.
*/

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
