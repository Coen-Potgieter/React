
export default function GameOver({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{(winner === "draw") ? "Draw!" : winner + " Won!"} </p>
            <p>
                <button onClick={onRestart}>Restart!</button>
            </p>
        </div>
    );
}
