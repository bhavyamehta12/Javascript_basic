// // import React from 'react'
// import { useEffect, useRef, useState } from 'react'

// const App = () => {
//   const [running, setRunning] = useState(false);
//   const startref = useRef(null);
//   const intervalRef = useRef(null);
//   useEffect(()=>{
//     if(!running) return;
//     ref.current = setInterval(()=>{
//       const now = new Date();
//       const current = 
//     },1000)
//   })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lastPausedAt, setLastPausedAt] = useState(null);

  // Mutable values that should NOT cause a render
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const accumulatedTimeRef = useRef(0);

  const startCountRef = useRef(0);
  const previousElapsedRef = useRef(0);

  // Create / destroy timer whenever running state changes
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      const now = Date.now();

      const currentElapsed =
        accumulatedTimeRef.current +
        (now - startTimeRef.current);

      setElapsed(currentElapsed);
    }, 50);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  const handleStart = () => {
    // Count every Start click
    startCountRef.current += 1;

    // Don't create another timer
    if (isRunning) return;

    startTimeRef.current = Date.now();

    setIsRunning(true);
  };

  const handlePause = () => {
    if (!isRunning) return;

    const now = Date.now();

    const finalElapsed =
      accumulatedTimeRef.current +
      (now - startTimeRef.current);

    // Save the elapsed value before replacing it
    previousElapsedRef.current = elapsed;

    // Save total elapsed time
    accumulatedTimeRef.current = finalElapsed;

    setElapsed(finalElapsed);
    setLastPausedAt(finalElapsed);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    previousElapsedRef.current = elapsed;

    accumulatedTimeRef.current = 0;
    startTimeRef.current = 0;

    setElapsed(0);
    setIsRunning(false);
    setLastPausedAt(null);
  };

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);

    const minutes = Math.floor(
      (milliseconds % 3600000) / 60000
    );

    const seconds = Math.floor(
      (milliseconds % 60000) / 1000
    );

    const ms = milliseconds % 1000;

    return `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(ms).padStart(3, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>{formatTime(elapsed)}</h2>

      <p>
        Status:{" "}
        {isRunning
          ? "Running"
          : elapsed > 0
          ? "Paused"
          : "Stopped"}
      </p>

      <button onClick={handleStart}>Start</button>

      <button onClick={handlePause}>Pause</button>

      <button onClick={handleReset}>Reset</button>

      <p>
        Start clicked: {startCountRef.current} times
      </p>

      <p>
        Last paused at:{" "}
        {lastPausedAt !== null
          ? formatTime(lastPausedAt)
          : "Never"}
      </p>

      <p>
        Previous elapsed time:{" "}
        {formatTime(previousElapsedRef.current)}
      </p>
    </div>
  );
};

export default App;