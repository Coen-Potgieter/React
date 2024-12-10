import { useState } from "react";

const initialGameBoard = [ 
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    const [ isPlayer1Turn, setIsPlayer1Turn ] = useState(true);

    function handleSquareSelect(rowIdx, colIdx) {
        setIsPlayer1Turn((prevTurn) => !prevTurn);
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

            newGameBoard[rowIdx][colIdx] = (isPlayer1Turn) ? "X" : "O";
            return newGameBoard;
        });
    }
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIdx) => (
            <li key={rowIdx}>
                    <ol>
                        {row.map((symbol, colIdx) => (
                            <li key={colIdx}>
                                <button onClick={() => handleSquareSelect(rowIdx, colIdx)}>
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
