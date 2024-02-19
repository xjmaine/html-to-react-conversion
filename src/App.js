import React from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import About from './pages/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>

    </div>
  );
}

export default App
