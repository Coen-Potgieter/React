import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";


export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialogRef = useRef();

    const [ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // If we Run Out of Time then show pop-up dialog box
    if (timeRemaining <= 0) {
        dialogRef.current.showModal();
    }

    // Reset Eveyrthing When Pop-up is closed
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
        clearInterval(timer.current);
    }

    // Start our timer, where every 10ms our `timeRemaining` state vairable is updated
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRem => {
                setTimeRemaining(prevTimeRem - 10);
            })
        }, 10);
    }

    // If the Stop Button is clicked show pop-up dialog
    function handleStop() {
        dialogRef.current.showModal();
    }

    return (
        <>
            <ResultModal 
                ref={dialogRef} 
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Sart"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section> 
        </>
    )
}
