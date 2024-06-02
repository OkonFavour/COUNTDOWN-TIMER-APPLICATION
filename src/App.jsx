import React, { useState, useEffect } from 'react';
import TimerInput from '../src/components/TimerInput';
import TimerDisplay from '../src/components/TimerDisplay';
import TimerControls from '../src/components/TimerControls';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      const id = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    } else if (remainingTime === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  }, [isRunning, remainingTime]);

  const handleSetTime = (seconds) => {
    setTime(seconds);
    setRemainingTime(seconds);
  };

  const handleStart = () => {
    if (remainingTime > 0 && !isRunning) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setRemainingTime(time);
    setIntervalId(null);
  };

  return (
    <div className="App">
      <div className="center-content">
        <TimerInput setTime={handleSetTime} />
        <TimerDisplay remainingTime={remainingTime} />
        <TimerControls
          start={handleStart}
          pause={handlePause}
          reset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
