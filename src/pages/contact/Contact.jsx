import React, { useRef } from 'react'
import './Contact.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import {IoDocumentOutline} from 'react-icons/io5'
import resume from '../../asset/ARYAN_BEHAL_RESUME.pdf'
import emailjs from 'emailjs-com'

export default function Contact() {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r55o2by', 'template_ap7v3cd', e.target, 'rKCsO_Q29nbj_iKBs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.user_email = ''
      e.target.message = ''

  };

  return (
    <Container className='contact' >
      <h1 className='heading' id='contact'>Contact</h1>
      <Row className='w-100 row'>
        <Col>
            <div className='icons' >
                <div className='icon' >
                <a href='https://www.linkedin.com/in/aryan-behal-436b681a2' target="_blank">
                  <i className='icon' ><AiFillLinkedin/></i>
                </a>
                  <span>Linkdin</span>
                </div>
                <div className='icon' >
                <a href='https://github.com/Aryan-coder' target="_blank">
                  <i className='icon' ><AiFillGithub/></i>
                  </a>
                  <span>Github</span>
                </div>
                <div className='icon' >
                <a >
                  <i className='icon' ><AiOutlineMail/></i>
                  </a>
                  <span>Mail</span>
                </div>
                <div className='icon' >
                <a href='whatsapp://send?abid=8477032662&text=Hello%2C%20World!' target="_blank">
                  <i className='icon' ><AiOutlineWhatsApp/></i>
                  </a>
                  <span>Whatsapp</span>
                </div>
                <div className='icon' >
                <a href={resume} download>
                <i className='icon'><IoDocumentOutline /></i>
                </a>
                  <span>Resume</span>
                </div>
            </div>
        </Col>
        <Col>
        <form onSubmit={e=>sendEmail(e)}>
          <Col className='input-column' >
            <input placeholder='<Your email>' name="user_email" className='w-100' />

            <textarea placeholder='Type message here'  name="message" className='w-100' />
        </Col>
        <Col>
        <Button  type='submit' className='send-button' >Send</Button>
        </Col>
        </form>
        </Col>
      </Row>
    </Container>
  )
}
