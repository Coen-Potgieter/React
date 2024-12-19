import { useState, useEffect } from "react";

export default function ProgressBar({ maxTime, onTimeCompleted }) {

    const [ timeRemaining, setTimeRemaining ] = useState(maxTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress
            className="w-full text-my-teal bg-my-teal"
            value={timeRemaining}
            max={maxTime}
        />
    )
}
