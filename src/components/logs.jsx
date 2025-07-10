function Log({turns}){
    return(
        <>
        <div className="log">
            {turns.map((turn,index) => (
                <p key={index} >{turn.player} selected {turn.circle.row} -- {turn.circle.col}</p>
            ))}
        </div>
        </>
    )
}
export default Log