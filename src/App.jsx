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
      question: "What are the two main categories of trees? Please enter as \"D________ and C_________\"",
      answer: "Deciduous and Coniferous"
    },
    {
      question: "_________ trees (also known as broadleaf) have large and wide leaves." 
      + " This allows for the tree to take in more sunlight for photosynthesis, but with a tradeoff that the leaves are often fragile."
      + " _________ trees often drop their leaves in the autumn 🍂.",
      answer: "Deciduous"
    },
    {
      question: "__________ trees retain their leaves throughout the year and only shed old leaves. They produce cones (which are its flowers)."
      + " Some well known __________ trees are pines, spruces, firs, and hemlocks.",
      answer: "Coniferous"
    },{
      question: "What is the oldest known tree species that can live for over 5000 years?",
      answer: "Great Basin Bristlecone Pine"
    }
  ]

  const [currCard, setCurrCard] = useState(0);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');

  const handleNext = (increment) => {
    
    if (currCard + increment == allCards.length) {
      setCurrCard(1);
    } else if (currCard + increment < 1) {
      setCurrCard(allCards.length - 1);
    } else if (increment == 23) {
      setCurrCard(generateNext());
    } else {
      setCurrCard(currCard + increment);
    }
    setAnswer('');
    setResult('Enter your answer: ');
  }

  const generateNext = () => {
    const totalCards = allCards.length-1;
    const result = 1 + Math.floor((Math.random()*totalCards));
    console.log("random number was " + result);
    return result;
  }

  const handleAnswer = (e) => {
    const inputted = e.target.value;
    console.log(inputted);
    setAnswer(inputted);
  }

  const handleCheckAnswer = () => {
    // Verify if inputted answer is the same as recorded answer
    if (answer == allCards[currCard].answer) {
      setResult('Correct!');
    } else {
      setResult('Try again');
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Leafy Learning</h1>
        <h2>Test your tree knowledge with this tree trivia!</h2>
        <h3>Total cards: {allCards.length}</h3>
        <Flashcard question={allCards[currCard].question} answer={allCards[currCard].answer} handleNext={handleNext}/> 
        <br/>
        <h3>{result}</h3>
        <input type='text' onChange={handleAnswer} value={answer} className='answerBox'/>
        <button className='nextButton' onClick={handleCheckAnswer}>Check Answer</button>
        <a className='credits' href='https://www.nwf.org/Trees-for-Wildlife/About/Trees-101'>Information Source </a> 
      </div>
    </> 
  )
}

export default App
