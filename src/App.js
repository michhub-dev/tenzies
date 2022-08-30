import React, {useState, useEffect} from "react";
import Die from './components/Die';
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'


export default function App(){
  const [dice, setDice] = useState(generateDie())
  const [ tenzies, setTenzies] = useState(false)

  function randomDieObject(){
    return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
}

  }
    function generateDie(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push(randomDieObject())
        }
        return newArray
    }

    function holdDice(id){
        setDice(prevDie => prevDie.map(die => {
          return die.id === id ? { ...die, isHeld: !die.isHeld} : die 
        }))
    }

    const mapDice = dice.map(die => (
            <Die key={die.id} 
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
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
    
    useEffect(() => {
       const isAllDieHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        //The value should be the same with the first value clicked 
        const checkSameValue = dice.every(die => die.value === firstValue)
        if(isAllDieHeld && checkSameValue){
            setTenzies(true)
            console.log("You won!")
        }
    },[dice])
   
   const text =  tenzies ? "New game" : "Roll Dice"
   
   const styles = {
    width: "650px",
    height: "400px"
   }

    return (
        <>
        <main>
            { tenzies && <Confetti style={styles}/> }
            <h1 className="title">Tenzies Game</h1>
            <p className="description">Roll the dice until they are the same.
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