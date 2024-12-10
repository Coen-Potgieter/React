
export default function GameBoard( { onSquareSelect, gameBoard }) {
    


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIdx) => (
            <li key={rowIdx}>
                    <ol>
                        {row.map((symbol, colIdx) => (
                            <li key={colIdx}>
                                <button 
                                    onClick={() => onSquareSelect(rowIdx, colIdx)}
                                    disabled={symbol != null}>
                                    {symbol}
                                </button>
                            </li>
                        ))}
                    </ol>
            </li>
            ))}
        </ol>
    );
}
