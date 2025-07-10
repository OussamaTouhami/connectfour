import { useState } from "react";



function GameBoard({onSelect,board}){
    /* const [gameBoard,setGameBoard] = useState(initialGameBoard);
    function handleActiveBtn(rowIndex,colIndex){
        setGameBoard((prev) =>{
            let updatedArray = [...prev.map((innerArray) => [...innerArray])]
            updatedArray[rowIndex][colIndex] = currentColor;
            return updatedArray
        })
        onSelect()
    } */


    return(
        <> 
            <div className="circleWrapper">
                {board.map((row,rowIndex) => (
                    <div className="" key={rowIndex}>
                        {row.map((col,colIndex) => (
                            <button disabled={col !== null} onClick={() => onSelect(rowIndex,colIndex)} key={colIndex} className={`circle ${col}`}  ></button>
                            
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default GameBoard;