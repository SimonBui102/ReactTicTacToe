import { useState } from "react";

export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName]= useState(initialName)
    const [isEditing, setEditing]= useState(false);

    function handleEditClick(){

        setEditing((editing) => !editing);
    }

    //Event object from onChange
    //React will give us event object
    function handleChange(event) {

        setPlayerName(event.target.value);

    }


    
    let editablePlayerName =<span className="player-name"> {playerName} </span>

    let btnCaption = "Edit";

    if(isEditing){
        // Onchange will be triggered for every Keystroke
        // Will provide us with an event object that was entered by the user.
        editablePlayerName= <input type = "text" required value = {playerName} onChange={handleChange} ></input>
        btnCaption = "Save";
    }

    return (
      <li>
        <span className="player">
            {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => handleEditClick()}> {btnCaption}</button>
      </li>
    );
        
    

}