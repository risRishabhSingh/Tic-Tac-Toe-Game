import React, { useEffect, useState } from 'react'
import './Grid.css'
import { useNavigate } from 'react-router-dom'


const Gridbox = ({resetfun, resetbtn, datafromchild}) => {
    const navigate = useNavigate()
    const [sign, setSign] = useState(true)
    const [board, setBoard] = useState(Array(9).fill(null))

    const winnerCombination = [
        [0,1,2], [3,4,5], [6,7,8],  // rows
        [0,3,6], [1,4,7], [2,5,8],  //column
        [0,4,8], [2,4,6]          // diagonal
    ]
    
    const winner = () => {
        for(let i of winnerCombination){
            const [a,b,c] = i
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                console.log(`Winner: ${board[a]}`)
                return board[a]
            }
        }
        return null
    }

    const setClick = (e) => {
        if(e.target.classList.contains("box") && e.target.innerHTML === "" && !winner()){
            const updatedboard = [...board]
            if(sign){
                e.target.innerHTML = "O"
                updatedboard[e.target.dataset.id] = "O"
            }
            else{
                e.target.innerHTML = "X"
                updatedboard[e.target.dataset.id] = "X"
            }
            senddatatoparent(sign)
            setBoard(updatedboard)
            setSign(!sign)
        }
        
    }
    
    const senddatatoparent = (dataofsign) => {
        datafromchild(dataofsign)
    }

    if(winner() !== null){
        navigate(`/Winner/${winner()}`)
    }
    
    useEffect(() => {
        if(resetbtn > 0){
            setSign(true)
            setBoard(Array(9).fill(null))
            clearallvalue()
            console.log(board)
            resetfun()
        }

    },[resetbtn])

    const clearallvalue = () =>{
        let box = document.querySelectorAll(".box")
        box.forEach((button) => {
            button.innerHTML = ""
        })
        
    }

  return (
    <div className='Rows'>
        <div className="row1">
            <button className='box' data-id='0' onClick={(e) => setClick(e)}></button>
            <button className='box' data-id='1' onClick={(e) => setClick(e)}></button>
            <button className='box' data-id='2' onClick={(e) => setClick(e)}></button>
        </div>
        <div className="row2">
            <button className='box' data-id='3' onClick={(e) => setClick(e)}></button>
            <button className='box' data-id='4' onClick={(e) => setClick(e)}></button>
            <button className='box' data-id='5' onClick={(e) => setClick(e)}></button>
        </div>
        <div className="row3">
            <button className='box' data-id='6' onClick={(e) => setClick(e)}></button>
            <button className='box' data-id='7' onClick={(e) => setClick(e)}></button>
            <button className='box' data-id='8' onClick={(e) => setClick(e)}></button>
        </div>
        
    </div>
  )
}

export default Gridbox
