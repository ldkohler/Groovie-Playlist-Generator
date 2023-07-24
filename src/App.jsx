import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Wrapper from './pages/Wrapper'
import Home from './pages/Home'
import SpotifyLogin from './pages/SpotifyLogin'
import About from './pages/About'
import Privacy from './pages/Privacy'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path='login' element={<SpotifyLogin />} />
          <Route path='about' element={<About />} />
          <Route path='privacy' element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
