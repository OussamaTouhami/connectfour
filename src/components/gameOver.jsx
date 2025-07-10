function GameOver({gameResult,onRestart}){
    let gameOverStyle;
    if (gameResult && gameResult === "redPlayer"){
        gameOverStyle = "redBg"
    }
    else if (gameResult && gameResult === "yellowPlayer"){
        gameOverStyle = "yellowBg";
    }


    return(
        <>  
            <div className={`gameOver ${gameOverStyle}`}>
                <h1>Game Over</h1>
                {gameResult && <p>{gameResult} wins</p> }
                {!gameResult && <p>It's a tie</p> }
                <button onClick={onRestart}>Rematch</button>
            </div>
        </>
    )
}
export default GameOver