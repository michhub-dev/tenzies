import React, {useState, useEffect} from "react";
import Die from './components/Die';


export default function App(){
  const [dice, setDice] = useState(dieRandomNum)

    function dieRandomNum(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push(Math.ceil(Math.random() * 6))
        }
        return newArray
    }

    const mapDice = dice.map(die => <Die value={die} />)

    return (
        <>
        <main>
            <div className='main-container'>
                {mapDice}
              
            </div>
        </main>
        </>
    )
}