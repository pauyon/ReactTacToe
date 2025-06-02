import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing); // schedules a state update, but it may not reflect the latest state immediately
        setIsEditing((editing) => !editing); // schedules a state update and reflects the latest state immediately

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let buttonName = "Edit";
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {

        buttonName = "Save";
        editablePlayerName = (
            <input 
            type="text" 
            defaultValue={playerName}
            onChange={handleChange} />
        );
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonName}</button>
        </li>
    );
}