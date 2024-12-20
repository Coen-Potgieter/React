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

    if (timeRemaining <= 0) {
        onTimeCompleted(-1);
        setTimeRemaining(maxTime);

    }
    return (
        <progress
            id="progress-bar"
            value={timeRemaining}
            max={maxTime}
            {...props}
        />
    )
}
