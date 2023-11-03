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
       {
        screen.width < 800 ? 
        <div className='incompatable-message' >
          <h1>Welcome to my portfolio website! Currently, the website is best experienced on desktop or laptop devices.</h1>
          <h1> I'm working on making it mobile-friendly too, so stay tuned for an optimized mobile version</h1>
          <h1>In the meantime, Please access the site from a larger screen for the best viewing experience. Thank you for your understanding!</h1>
        </div>
        :
        <>
        <Menu/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Bye/>
        </>
       }
    </div>
  )
}

export default App