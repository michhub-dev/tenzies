import React, {useState, useEffect} from "react";
import Die from './components/Die';
import {nanoid} from "nanoid";
import Confetti from 'react-confetti';
import Navbar from "./components/Navbar";
/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)*/

export default function App(){

  //State variable 
  const [dice, setDice] = useState(generateDie())
  const [ tenzies, setTenzies] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Dice object with generated numbers
  function randomDieObject(){
    return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
}

  }
  //Loop through to generate new dice 
    function generateDie(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push(randomDieObject())
        }
        return newArray
    }

    // Only generate new numbers/roll dice for unheld dice 
    function holdDice(id){
        setDice(prevDie => prevDie.map(die => {
          return die.id === id ? { ...die, isHeld: !die.isHeld} : die 
        }))
    }
    //Toggle button for dark mode
    function toggleDarkMode(){
      setDarkMode(dark => !dark)
      
    }
   
//Map through the dice and display with its properties 
    const mapDice = dice.map(die => (
            <Die key={die.id} 
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            />
            ))


     /* When clicked, map through each dice, don't change already 
        held dice, roll unheld dice.
       Otherwise restart the game 
    */
    function rollDice(){
      if(!tenzies){
        return setDice(oldDie => oldDie.map(die =>{
            return die.isHeld ? die : randomDieObject() 
        }))
      }else {
        setTenzies(false)
        setDice(generateDie)
      }
    }
    
    /* This effect will run when dice changes. 
      Check if the dice are held and if the numbers match
      */
    useEffect(() => {
       const isAllDieHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        //The value should be the same with the first value clicked 
        const checkSameValue = dice.every(die => die.value === firstValue)
        if(isAllDieHeld && checkSameValue){
            setTenzies(true)
            
        }
    },[dice])
   
    // The text to display to button based on condition 
   const text =  tenzies ? "New game" : "Roll Dice"

   //styling for confetti 
   const styles = {
    width: "650px",
    height: "400px"
   }

    return (
        <>
        <Navbar toggleDarkMode={toggleDarkMode}/>
        <main className={darkMode ? "dark" : "#eeeeee"}>
            { tenzies && <Confetti style={styles}/> }
            <h1 className={darkMode ? "dark" : "title"}>Tenzies Game</h1>
            <p className={darkMode ? "dark" : "description"}>Roll the dice until they are the same.
                Click the numbers that match and roll the dice until you get all 
                same dice.
            </p>
            <div className='main-container'>
                {mapDice}
              <button className="roll-btn" onClick={rollDice}>{text}</button>
            </div>
        </main>
        </>
    )
}