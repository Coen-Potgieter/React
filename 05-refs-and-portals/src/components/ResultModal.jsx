import { createPortal } from "react-dom";

export { createPortal } from "react-dom";

export default function ResultModal({ targetTime, ref, remainingTime, onReset}) {

    const userLost = remainingTime <= 0;
    const formattedRemTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    return createPortal(
        <dialog ref={ref} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>The Target Time Was <strong>{targetTime} Second{targetTime > 1 && "s"}.</strong></p>

            {!userLost && <p>You Stopped The Timer With <strong>{formattedRemTime} Seconds Left</strong></p>}
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>, document.querySelector("body")
    );
}
