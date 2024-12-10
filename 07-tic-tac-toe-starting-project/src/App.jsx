import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  

  return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initName="Player 1" symbol="X"/>
                    <Player initName="Player 2" symbol="O"/>
                </ol>
                <GameBoard />
            </div>
            LOGS
        </main>
  )
}

export default App
