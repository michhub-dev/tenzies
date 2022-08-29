import React, {useState, useEffect} from "react";
import Die from './components/Die';
import {nanoid} from "nanoid"


export default function App(){
  const [dice, setDice] = useState(dieRandomNum())
  const [ tenzies, setTenzies] = useState(false)

  function generateNewDie(){
    return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
}

  }
    function dieRandomNum(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push(generateNewDie())
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
             held dice, roll unheld dice 
            */
    function rollDice(){
        return setDice(oldDie => oldDie.map(die =>{
            return die.isHeld ? die : generateNewDie() 
        }))
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
   
   
    return (
        <>
        <main>
            <h1 className="title">Tenzies Game</h1>
            <p className="description">Roll the dice until they are the same.
                Click the numbers that match and roll the dice until you get all 
                same dice.
            </p>
            <div className='main-container'>
                {mapDice}
              <button className="roll-btn" onClick={rollDice}>Roll Dice</button>
            </div>
        </main>
        </>
    )
}