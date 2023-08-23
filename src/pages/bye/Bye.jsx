import React from 'react'
import { Container } from 'react-bootstrap'
import './Bye.scss'
import {FaRegSmileBeam} from 'react-icons/fa'

export default function Bye() {
  return (
    <Container className='bye'>
        <h1 className='thanks' >Thanks For Your Time</h1>
        <i><FaRegSmileBeam/></i>
        <h1 className='bye-text'>Have a good day</h1>
    </Container>
  )
}
