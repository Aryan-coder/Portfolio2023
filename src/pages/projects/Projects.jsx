import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap'
import {DiSass} from 'react-icons/di'
import {SiJavascript, SiReact, SiRedux} from 'react-icons/si'
import {TbBrandFirebase} from 'react-icons/tb'
import './Projects.scss'
import {AiFillGithub} from 'react-icons/ai'
import chatappImage1 from '../../asset/chatapp/1.png'
import chatappImage2 from '../../asset/chatapp/2.png'
import chatappImage3 from '../../asset/chatapp/3.png'
import chatappImage4 from '../../asset/chatapp/4.png'
import tictactoeVideo from '../../asset/tictactoe.mp4'
import authVideo from '../../asset/auth.mp4'
import {AiFillHtml5} from 'react-icons/ai'
import ImageSlider from '../../components/slider/ImageSlider'
import {DiCss3} from 'react-icons/di'

export default function Projects() {

 
  return (
    <Container className='d-flex flex-column'>
        <h1 className='heading' id='project' >Projects</h1>
        <Row className='projects' style={{display:'flex', position:'relative', gap: '50px'}} >
            <Col className='project' style={{position:'relative'}} >
            <Card className='card'>
            <ImageSlider images={[chatappImage1, chatappImage2, chatappImage3, chatappImage4]} />
      <Card.Body>
        <Card.Title className='cart-title' >ChatApp<a className='git-icon' href='https://github.com/Aryan-coder/Chatapp-web' target="_blank"><AiFillGithub/></a></Card.Title>
        <Card.Text className='cart-text' >
            Messaging application
            which allows users to chat
            with each other in real-time
            with a simple and intuitive user
            interface for an enjoyable user
            experience
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='project-skills' >
            <i><SiJavascript/></i>
            <i><SiReact/></i>
            <i><DiSass/></i>
            <i><TbBrandFirebase/></i>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <a href="https://chatapp-aryanbehal-2000.firebaseapp.com/" target='_blank'>Open Live Preview</a>
      </Card.Body>
    </Card>
            </Col>  


            <Col className='project' style={{position:'relative'}} >
            <Card className='card'>
            <video width="290px" height="180px" autoPlay loop muted >
		          <source src={tictactoeVideo} type="video/mp4" />
	        </video>
      <Card.Body>
        <Card.Title className='cart-title' >TicTacToe<a className='git-icon' href='https://github.com/Aryan-coder/TicTacToe' target="_blank"><AiFillGithub/></a></Card.Title>
        <Card.Text className='cart-text' >   
            TicTacToe game with drag and drop
            feature which make gameplay more fun
            and interactive
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='project-skills' >
            <i><AiFillHtml5/></i>
            <i><DiCss3/></i>
            <i><SiJavascript/></i>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <a href="https://aryan-coder.github.io/TicTacToe/" target='_blank'>Open Live Preview</a>
      </Card.Body>
    </Card>
            </Col>  

            <Col className='project' style={{position:'relative'}} >
            <Card className='card'>
            <video width="290px" height="180px" autoPlay loop muted >
		          <source src={authVideo} type="video/mp4" />
	        </video>
      <Card.Body>
        <Card.Title className='cart-title' >Authentication Page<a className='git-icon' href='https://github.com/Aryan-coder/AuthPage' target="_blank"><AiFillGithub/></a></Card.Title>
        <Card.Text className='cart-text' >   
            Authentication page with slider to switch between Sign-in/Sign-up
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='project-skills' >
        <i><AiFillHtml5/></i>
            <i><DiCss3/></i>
            <i><SiJavascript/></i>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <a href="https://aryan-coder.github.io/AuthPage/" target='_blank'>Open Live Preview</a>
      </Card.Body>
    </Card>
            </Col>  
        </Row>
    </Container>
  )
}

/*
<video width="500px" height="500px" controls="controls">
		<source src="vid.mp4" type="video/mp4" />
	</video>
*/