/**
 * 1. Declare a state to hold data
 * 2. useEffect with call back and dependency array
 * 3. Use fetch to load data
 * 4. Display data
 * 
*/

import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div style={{
            border: '2px solid yellow',
            padding: '20px',
            marginTop: '10px'
        }}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
}