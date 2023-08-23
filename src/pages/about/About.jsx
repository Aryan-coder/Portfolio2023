import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.scss'
import {BiDumbbell} from 'react-icons/bi'
import {BsBook, BsMusicNoteBeamed} from 'react-icons/bs'
import {IoGameControllerOutline} from 'react-icons/io5'

export default function About() {
  return (
    <Container className='container about ' >
      <h1 className='heading' id='about' >About Me</h1>
      <p>
        As a frontend React developer, I specialize in creating high-quality user interfaces and web applications using the
        React JavaScript library. With a solid foundation in HTML, CSS, and JavaScript, I build dynamic, responsive, and
        mobile-friendly websites that provide an exceptional user experience.
        <br/>
        My proficiency in React allows me to create complex UI components, manage state effectively, and handle user
        interactions efficiently. I work closely with designers, product managers, and other developers to build scalable
        and efficient software products. With experience in version control systems such as Git and agile development
        methodologies, I am well-equipped to collaborate effectively in cross-functional teams.
        <br/>
        I have a deep understanding of front-end technologies such as Redux, CSS preprocessors, and front-end build
        tools like Webpack. I also have experience working with testing frameworks such as Jest and Enzyme, as well as
        server-side rendering and integration with APIs.
        <br/>
        Overall, my expertise in frontend development with React, combined with my strong communication and
        collaboration skills, makes me a valuable asset to any team looking to deliver high-quality software products</p>
        <div className='other-interest'>
          <h4>Other interest :</h4>
          <ul>
            <li><i><BiDumbbell/></i><span>Weight Training</span></li>
            <li><i><BsBook/></i><span>Reading Books</span></li>
            <li><i><BsMusicNoteBeamed/></i><span>Listening Music</span></li>
            <li><i><IoGameControllerOutline/></i><span> Playing Video Games</span></li>
          </ul>
        </div>
    </Container>
  )
}
