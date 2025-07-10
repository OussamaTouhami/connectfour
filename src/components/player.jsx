import { useState } from "react";


function Player({playerColor,playerName,isSelected}){
    const [edit,setEdit] = useState();
    const [isChanged,setIsChanged] = useState(playerName)

    function handleEdit(){
        setEdit((prev) => !prev)
    }
    function handleInput(event){
        setIsChanged(event.target.value)
    }

    return(
        <>
            <div className={isSelected ? "player activePlayer" : "player"}>
                {edit ? <input type="text" value={isChanged} onChange={handleInput}/> : <span>{isChanged}</span> }
                <div className={playerColor}></div>
                <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
            </div>
            
        </>
    )
}
export default Player;