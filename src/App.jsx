import { useState } from "react";
import Log from "./components/logs";
import Player from "./components/player";
import GameBoard from "./components/gameBoard";
import { winning_comb } from "./winComb";
import GameOver from "./components/gameOver";

let initialGameBoard = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
]

function deriveActivePlayer(gameTurn){
  let activePlayer = "redPlayer";
  if (gameTurn.length > 0 && gameTurn[0].player === "redPlayer"){
    activePlayer = "yellowPlayer";
  }
  return activePlayer;
}

function App(){
  const [gameTurns,setGameTurns] = useState([]);
  let isActive = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])]
  for (let turn of gameTurns){
    let {circle, player} = turn;
    let  {row,col} = circle;

    gameBoard[row][col] = player;
  }

  let winner;
  let hasDraw = gameTurns.length === 42 && !winner;

  for (let combination of winning_comb){
    let [a,b,c,d] = combination;

    let valA = gameBoard[a.row][a.col];
    let valB = gameBoard[b.row][b.col];
    let valC = gameBoard[c.row][c.col];
    let valD = gameBoard[d.row][d.col];

    if (valA && valA == valB && valA == valC && valA == valD){
      winner = valA;
    }

  }


  function handleActivePlayer(rowIndex,colIndex){
    //---------------------------------------------------------------------
    setGameTurns((prevGameTurn) =>{
      let currentPlayer = deriveActivePlayer(prevGameTurn);
      if (gameTurns.length > 0 && gameTurns[0].player === "redPlayer"){
        currentPlayer = "yellowPlayer";
      }
      let updatedGameTurn = [{
        circle: {row: rowIndex, col: colIndex}, player: currentPlayer
      },...prevGameTurn]
      return updatedGameTurn
    })
    //---------------------------------------------------------------------

  }

  function handleRematch(){
    setGameTurns([]);
  }

  return(
    <>
      <div className="mainContainer">
          <div className="gameContainer">
           
          
              {(winner || hasDraw) ?   <GameOver gameResult={winner} onRestart={handleRematch} />   :
              <>
                <div className="description" style={{
                  textAlign: "center",
                  background: "linear-gradient(120deg,red,yellow)",
                  padding: "0.1rem",
                  borderRadius: "10px",
                  margin: "0 0 1rem 0"
                }}>
                  <h1 >CONNECT 4 game</h1>
                
                <p>Made By Oussama Touhami</p>
                </div>
                 <div className="players">
                <Player playerColor={"red"} playerName={"P1"} isSelected={isActive === "redPlayer"}/>
                <Player playerColor={"yellow"} playerName={"P2"} isSelected={isActive === "yellowPlayer"}/>
                </div>
                <div className="gameBoard">
                  <GameBoard onSelect={handleActivePlayer} currentColor={isActive} board={gameBoard}/>
                </div>
              </>
              }
           
          </div>
            <div className="logs">
                <Log turns={gameTurns}/>
            </div>
      </div>
    </>
  )
}
export default App;