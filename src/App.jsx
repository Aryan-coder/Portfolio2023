import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about/About';
import Menu from './components/menu/Menu';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Bye from './pages/bye/Bye';
import Experience from './pages/experience/Experience';
import Contact from './pages/contact/Contact';

function App() {

  return (
    <div className="App">
        <Menu/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Bye/>
    </div>
  )
}

export default App
//https://brittanychiang.com/#jobs