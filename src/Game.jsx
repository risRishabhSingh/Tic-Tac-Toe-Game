import React, { useState } from 'react'
import Gridbox from './Gridbox'
import './Style.css'


const Game = () => {
  const [resetbutton,setResetbutton] = useState(0)
  const [incre, setincre] = useState(false)
  const [selectedplayer , setSelectedplayer] = useState(null)

  const resetGame = () => {
    setincre(!incre)
    if(incre){
      setResetbutton(prevalue => prevalue+1)
      setincre(!incre)
    }
  }

  const receiveDataFromChild = (ValueOfSign) => {
    if(ValueOfSign){
      setSelectedplayer(ValueOfSign)
    }else{
      setSelectedplayer(ValueOfSign)
    }
  }

  return (
    <div className='Container'>
        <h1>Tic-Tac-Toe</h1>
        <div className="smaller-container">
            {selectedplayer ? <h3>It's Players 2 Turn</h3> : <h3>It's Players 1 Turn</h3>}
            <div className="Grid">
                <Gridbox resetfun = {resetGame} resetbtn = {resetbutton} datafromchild = {receiveDataFromChild}/>
            </div>
            <button className='button1' onClick={resetGame}>Reset Game</button>
        </div>
    </div>
  )
}

export default Game
