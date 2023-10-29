import React from 'react'
import { Routes,Route, HashRouter } from 'react-router-dom'
import Game from './Game'
import Winner from './Winner'


const Link = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/Winner/:player' element = {<Winner/>}></Route>
            <Route path="/" element = {<Game/>}></Route>
        </Routes>
    </HashRouter>
  )
}

export default Link
