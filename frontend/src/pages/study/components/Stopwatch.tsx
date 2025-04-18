import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaStop } from 'react-icons/fa'
import styles from './Stopwatch.module.css'

export default function Stopwatch() {
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)
  const timerRef = useRef<number>(0)

  // tick every 100ms when running
  useEffect(() => {
    if (running) {
      timerRef.current = window.setInterval(() => {
        setTime(t => t + 0.1)
      }, 100)
    } else {
      window.clearInterval(timerRef.current)
    }
    return () => window.clearInterval(timerRef.current)
  }, [running])

  const handleToggle = () => {
    setRunning(r => !r)
    if (!running) setTime(0)  // reset on start
  }

  // format as MM:SS.ms
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  const ms = Math.floor((time - Math.floor(time)) * 100)

  return (
    <div className={styles.stopwatchContainer}>
      <div className={styles.stopwatchTime}>
        {String(minutes).padStart(2,'0')}:
        {String(seconds).padStart(2,'0')}.
        {String(ms).padStart(2,'0')}
      </div>
      <button
        className={`stopwatch-button ${running ? 'running' : 'paused'}`}
        onClick={handleToggle}
        aria-label={running ? 'Stop' : 'Start'}
      >
        {running ? <FaStop /> : <FaPlay />}
      </button>
    </div>
  )
}