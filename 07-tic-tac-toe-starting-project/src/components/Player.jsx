import { useState } from "react";

export default function Player({ initName, symbol, isActive, onNameChange }) {
    const [ playerName, setPlayerName ] = useState(initName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleClick() {
        setIsEditing(currEditingState => !currEditingState);

        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = (
            <input type="text" className="player-name" required value={playerName} onChange={handleChange}/>
        );
    }


    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}
