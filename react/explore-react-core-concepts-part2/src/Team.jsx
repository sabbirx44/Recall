import { useState } from "react"

export default function Team() {

    const [players, setPlayers] = useState(11);

    const handleAdd = () => {
        const newPlayers = players + 1;
        setPlayers(newPlayers);
    }

    const handleRemove = () => {
        setPlayers(players - 1);
    }

    return (
        <div style={{
            border: '2px solid chartreuse',
            marginTop: '10px'
        }}>
            <h3>Players: {players}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}