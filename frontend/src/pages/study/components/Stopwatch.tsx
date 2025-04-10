import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch: React.FC = () => {
  // State for elapsed time (in ms) and whether the stopwatch is running.
  const [elapsed, setElapsed] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  // Use number type for timer ID since we're in a browser environment.
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Toggle the stopwatch between start and pause.
  const toggleStopwatch = () => {
    if (!running) {
      // Calculate start time relative to previous elapsed time.
      startTimeRef.current = Date.now() - elapsed;
      timerRef.current = window.setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 1000); // update every second
      setRunning(true);
    } else {
      // Clear the interval to pause the stopwatch.
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setRunning(false);
    }
  };

  // Format elapsed time in HH:MM:SS.
  const formatTime = (ms: number): string => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return (
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0')
    );
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display">{formatTime(elapsed)}</div>
      <button className="toggle-button" onClick={toggleStopwatch}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Stopwatch;