import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
