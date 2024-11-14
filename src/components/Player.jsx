import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setEditing]= useState(false);

    function handleEditClick(){

        setEditing((editing) => !editing);
    }
    
    let playerName =<span className="player-name"> {name} </span>

    let btnCaption = "Edit";

    if(isEditing){
        playerName= <input type = "text" required value = {name}></input>
        btnCaption = "Save";
    }

    return (
      <li>
        <span className="player">
            {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => handleEditClick()}> {btnCaption}</button>
      </li>
    );
        
    

}