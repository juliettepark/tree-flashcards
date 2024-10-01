import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard';
import { FaArrowAltCircleRight } from "react-icons/fa";

function App() {

  const allCards = [
    {
      question: "Welcome! Come along to learn about trees 🌲",
      answer: "Press the arrow to begin!"
    },
    {
      question: "What is the term for a garden of trees?",
      answer: "Arboretum"
    },
    {
      question: "What are the two main categories of trees?",
      answer: "Deciduous and Coniferous"
    },
    {
      question: "What makes a tree deciduous?",
      answer: "Deciduous trees (also known as broadleaf) have large and wide leaves." 
      + " This allows for the tree to take in more sunlight for photosynthesis, but with a tradeoff that the leaves are often fragile."
      + " Deciduous trees often drop their leaves in the autumn 🍂."
    },
    {
      question: "What makes a tree coniferous?",
      answer: "Coniferous trees retain their leaves throughout the year and only shed old leaves. They produce cones (which are its flowers)."
      + " Some well known coniferous trees are pines, spruces, firs, and hemlocks."
    },{
      question: "What is the oldest known tree species?",
      answer: "Great Basin bristlecone pine. They can live for over 5000 years!"
    }
  ]

  const [currCard, setCurrCard] = useState(0);

  const handleNext = () => {
    setCurrCard(generateNext());
  }

  const generateNext = () => {
    const totalCards = allCards.length-1;
    const result = 1 + Math.floor((Math.random()*totalCards));
    console.log("random number was " + result);
    return result;
  }

  return (
    <>
      <div className='container'>
        <h1>Leafy Learning</h1>
        <h2>Test your tree knowledge with this tree trivia!</h2>
        <h3>Total cards: {allCards.length}</h3>
        <Flashcard question={allCards[currCard].question} answer={allCards[currCard].answer}/> 
        <button className='nextButton' onClick={handleNext}>
          <FaArrowAltCircleRight size={25}/>
        </button>
        <a className='credits' href='https://www.nwf.org/Trees-for-Wildlife/About/Trees-101'>Information Source </a> 
      </div>
    </> 
  )
}

export default App
