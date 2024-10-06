import React from "react";
import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

function Flashcard(props) {
    const [flipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!flipped);
        console.log("Flipped is currently " + flipped);
    }

    const prepNext = (increment) => {
        setFlipped(false);
        props.handleNext(increment);
    }

    return (
        <>
            <div className="flashcard-container" onClick={handleFlip}>
                <h2>{ flipped? props.answer : props.question }</h2>
            </div>
            <button className='nextButton' onClick={ () => prepNext(-1) }>
                <FaArrowAltCircleLeft size={25}/>
            </button>
            <button className='nextButton' onClick={ () => prepNext(1) }>
                <FaArrowAltCircleRight size={25}/>
            </button>
            <button className='nextButton' onClick={ () => prepNext(23) }>
                <FaShuffle size={25}/>
            </button>
        </>
    );
}

export default Flashcard;