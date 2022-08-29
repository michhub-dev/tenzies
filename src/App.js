import React, {useState, useEffect} from "react";
import Die from './components/Die';
import {nanoid} from "nanoid"


export default function App(){
  const [dice, setDice] = useState(dieRandomNum())

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

    function rollDice(){
        return setDice(oldDie => oldDie.map(die =>{
            return die.isHeld ? die : generateNewDie() 
        }))
    }
    
   
    return (
        <>
        <main>
            <div className='main-container'>
                {mapDice}
              <button className="roll-btn" onClick={rollDice}>Roll Dice</button>
            </div>
        </main>
        </>
    )
}