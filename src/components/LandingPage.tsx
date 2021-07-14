import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const history = useHistory();
  function handleClick() {
    history.push(`/quiz`);
  }

  return (
    <div>
      <h3>Welcome to the Trivia Challenge!</h3>
      <h4>You will be presented with 10 True or False questions.</h4>
      <h4>Can you score 100%?</h4>
      <button type="button" onClick={handleClick}>
        BEGIN
      </button>
    </div>
  );
};

export default LandingPage;
