import React from 'react'
import './winner.css'
import { useNavigate, useParams } from 'react-router-dom'

const Winner = () => {
  const navigated = useNavigate()

  const handleclicknavi = () =>{
    navigated(`/`)
  }

  const {player} = useParams()

  return (
    <div className='Container'>
      <h1>Winner</h1>
      <h2 className='WinnerofGame'>{player}</h2>
      <button onClick={handleclicknavi} className='btnwinner'>New Game</button>
    </div>
  )
}

export default Winner
