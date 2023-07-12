import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wrapper from './pages/Wrapper'
import Home from './pages/Home'
import About from './pages/About'
import Account from './pages/Account'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/setup' element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App
