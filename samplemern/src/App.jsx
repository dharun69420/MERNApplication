import React from 'react'
import Contactus from './Contactus'
import Aboutus from './Aboutus'
import Home from './Home'
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Routes path="/" element={<Home />} />
      <Routes path="/aboutus" element={<Aboutus />} />
      <Routes path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App
