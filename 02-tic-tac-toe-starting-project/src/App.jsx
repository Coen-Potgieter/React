import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combination.js";

const INITIAL_GAME_BOARD = [ 
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYER_NAMES = { 
    X: "Player 1", 
    O: "Player 2", 
};

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";

    if ((gameTurns.length > 0) && (gameTurns[0].player === "X")){
        currentPlayer = "O";
    }
    return currentPlayer;
}

function deriveWinner(gameBoard, gameTurns, playerNames) {

    let winner;

    for (const combo of WINNING_COMBINATIONS) {
        const firstSqaureSymbol = gameBoard[combo[0].row][combo[0].column];
        const secondSqaureSymbol = gameBoard[combo[1].row][combo[1].column];
        const thirdSqaureSymbol = gameBoard[combo[2].row][combo[2].column];

        if (firstSqaureSymbol && 
            firstSqaureSymbol === secondSqaureSymbol && 
            firstSqaureSymbol === thirdSqaureSymbol) {
            winner = playerNames[firstSqaureSymbol];
        } else if (gameTurns.length === 9) {
            winner = "draw";
        }
    }
    return winner;
}

function deriveGameBoard(gameTurns) {

    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArr => [...innerArr])];
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}


function App() {
    const [ playerNames, setPlayerNames ] = useState(PLAYER_NAMES);
    const [ gameTurns, setGameTurns ] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, gameTurns, playerNames);

    function handleSquareSelect(rowIdx, colIdx ) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const newTurns = [
                { square: { row: rowIdx, col: colIdx }, player: currentPlayer}, 
                ...prevTurns];
            return newTurns;
        })
    }
    function handleRestart() {
        setGameTurns([]);
    }
    function handleNameChange(symbol, newName) {
        setPlayerNames(oldNames => {
            const updatedNames = oldNames;
            updatedNames[symbol] = newName;
            return updatedNames;
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player isActive={activePlayer === "X" ? true : false} 
                        onNameChange={handleNameChange} initName={playerNames.X} symbol="X"/>
                    <Player isActive={activePlayer === "O" ? true : false} 
                        onNameChange={handleNameChange} initName={playerNames.O} symbol="O"/>
                </ol>
                {winner && <GameOver winner={winner} onRestart={handleRestart}/>}
                <GameBoard 
                    onSquareSelect={handleSquareSelect} 
                    gameBoard={gameBoard}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
