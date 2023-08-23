import React from 'react'
import { Container } from 'react-bootstrap'
import './Experience.scss'

export default function Experience() {
  return (
    <Container className='experience d-flex flex-column' >
      <h1 className='heading' id='experience' >Experience</h1>
      <div className='center'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png' />
      <div>
      <h2>Tata Consultancy Services (TCS)</h2>
      <h3>React Developer</h3>
      <span>Aug 2020 - Present</span>
      <ul>
        <li>Developed user-friendly and scalable web applications using React.js</li>
        <li>Collaborated with designers, back-end developers and other stakeholders to ensure the website or application meets the requirements</li>
        <li>Created reusable UI components and libraries for future use</li>
        <li>Wrote clean, well-documented, and maintainable code</li>
      </ul> 
      </div>
      
      </div>
    </Container>
  )
}
