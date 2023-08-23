import React from 'react'
import { Container } from 'react-bootstrap'
import myphoto from '../../asset/aryanphoto.jpeg'
import {AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.scss'

export default function Home() {

  const scrollToContact=()=>{
    document.getElementById('contact').scrollIntoView({behavior:'smooth'})
  }

  return (
    <Container className='container' >
        <div className='profile-card' id='home' >
            <img className='myphoto' src={myphoto} />
            <span className='name' >Aryan Behal</span>
            <span className='designation' >Frontend Developer</span>
            <div className='icons' >
                <a href='https://www.linkedin.com/in/aryan-behal-436b681a2' target="_blank">
                  <i className='icon' ><AiFillLinkedin/></i>
                </a>
                <a href='https://github.com/Aryan-coder' target="_blank">
                <i className='icon' ><AiFillGithub/></i>
                </a>
                <a>
                <i className='icon' onClick={()=>scrollToContact()}><AiOutlineMail/></i>
                </a>
                <a href='whatsapp://send?abid=8477032662&text=Hello%2C%20World!' target="_blank">
                <i className='icon' ><AiOutlineWhatsApp/></i>
                </a>
            </div>
        </div>
    </Container>
  )
}
