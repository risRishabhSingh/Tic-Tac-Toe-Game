import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Game from './Game'
import Winner from './Winner'


const Link = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Winner/:player' element = {<Winner/>}></Route>
            <Route path="/" element = {<Game/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Link
