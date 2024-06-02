import React from 'react';

function TimerControls({ start, pause, reset }) {
  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default TimerControls;