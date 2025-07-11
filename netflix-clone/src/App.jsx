import React, { StrictMode } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from "./pages/Player/Player"
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/player/:videoId' element={<Player/>} />\
        </Routes>
    </div>
  );
}

export default App