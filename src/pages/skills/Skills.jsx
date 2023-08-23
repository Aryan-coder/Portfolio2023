import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJqueryLogo, DiSass} from 'react-icons/di'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiJavascript, SiReact, SiTypescript, SiRedux} from 'react-icons/si'
import {TbBrandFirebase} from 'react-icons/tb'
import { Col, Container, Row } from 'react-bootstrap'
import './Skills.scss'

export default function Skills() {
  return (
    <Container className='d-flex flex-column' >
        <h1 className='heading' id='skill' >Skills</h1>
        <Row className='skills'>
        <Col className='skill' >
          <i style={{animationDelay: '.5s'}} ><AiFillHtml5/></i>
          <span>HTML5</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '.8s'}}><DiCss3/></i>
          <span>CSS3</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '1.1s'}}><DiSass/></i>
          <span>SASS</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '1.4s'}}><BsFillBootstrapFill/></i>
          <span>Bootstrap</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '1.7s'}}><SiJavascript/></i>
          <span>Javascript</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '2s'}}><DiJqueryLogo/></i>
          <span>Jquery</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '2.3s'}} ><SiTypescript/></i>
          <span>Typescript</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '2.3s'}} ><SiReact/></i>
          <span>React</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '2.3s'}} ><SiRedux/></i>
          <span>Redux</span>
        </Col>
        <Col className='skill' >
          <i style={{animationDelay: '2.6s'}} ><TbBrandFirebase/></i>
          <span>Firebase</span>
        </Col>
      </Row>
    </Container>
  )
}
