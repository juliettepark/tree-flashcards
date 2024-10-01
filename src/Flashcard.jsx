import React from "react";
import { useState } from 'react';

function Flashcard(props) {
    const [flipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!flipped);
        console.log("Flipped is currently " + flipped);
    }

    return (
        <div className="flashcard-container" onClick={handleFlip}>
            <h2>{ flipped? props.answer : props.question }</h2>
        </div>
    );
}

export default Flashcard;