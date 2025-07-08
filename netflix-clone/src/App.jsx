import React, { StrictMode } from 'react'
import Home from './pages/Home/home'
import Login from './pages/Login/Login'
import Player from "./pages/Player/Player"
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/player/:id' element={<Player/>} />\
        </Routes>
      </StrictMode>
    </div>
  );
}

export default App