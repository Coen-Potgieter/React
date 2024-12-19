import { useState, useEffect } from "react";

export default function ProgressBar({ maxTime, isNewQuestion, onTimeCompleted, ...props }) {
    const [ timeRemaining, setTimeRemaining ] = useState(maxTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
            setTimeRemaining(maxTime);
        };
    }, [isNewQuestion]);

    return (
        <progress
            id="progress-bar"
            value={timeRemaining}
            max={maxTime}
            {...props}
        />
    )
}
