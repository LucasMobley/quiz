import React from 'react';
import { useHistory } from 'react-router-dom';


/*
This is the first component to render.  It has some simple html rendered and styled to 
match the wire frame provided.  I use the useHistory hook from react-router-dom as a handleClick event
to route users to the quiz page. The useHistory hook enables users to navigate back.
*/
const LandingPage: React.FC = () => {
  const history = useHistory();
  function handleClick() {
    history.push(`/quiz`);
  }

  return (
    <div className='landingParent'>
    <div className='landingChild'>
      <h1>Welcome to the Trivia Challenge!</h1>
      <br/>
      <p>You will be presented with 10 True or False questions.</p>
      <br/>
      <p>Can you score 100%?</p>
      <br/>
      <button className="begin" type="button" onClick={handleClick}>
        BEGIN
      </button>
    </div>
  </div>
  );
};

export default LandingPage;
