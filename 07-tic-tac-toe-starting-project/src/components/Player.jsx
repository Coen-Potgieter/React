import { useState } from "react";

export default function Player({ initName, symbol }) {
    const [ playerName, setPlayerName ] = useState(initName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleClick() {
        setIsEditing(currEditingState => !currEditingState);
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
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}
