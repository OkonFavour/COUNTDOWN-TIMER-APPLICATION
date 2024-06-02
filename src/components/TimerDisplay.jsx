import React from 'react';

function TimerDisplay({ remainingTime }) {
  return (
    <div>
      <h1>{remainingTime} seconds</h1>
    </div>
  );
}

export default TimerDisplay;