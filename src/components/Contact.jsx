import React from 'react'
import './Contact.scss'
import { Button, Row, Col } from 'antd'

export default () => {
  return (
    <>
    <svg style={{ position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0B7BC5" d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,165.3C672,160,768,128,864,96C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> 
    <div className="contact">
      <h2 style={{ position: 'relative', textAlign: 'right'  }}>Contact me.</h2>
      <img style={{ maxWidth: '300px' }} src={require('../contact-illustration.svg')} alt="contact-me"></img>
      <div style={{ marginTop: '20px'}}>
        <p>I'm currently <b>looking for an opportunity</b> to work as a Software Engineer, preferably as a <b>Front-End Developer</b>.<br></br>
        I'm open for a fulltime job or some freelance project.</p>
        <a href="mailto:satyowicaksana@gmail.com">
          <Button className="button" shape="round" size="large" type="primary">Get In Touch</Button>
        </a>
      </div>
      <Row>
        <Col span={6}>
        <a href="https://api.whatsapp.com/send?phone=628111828395">
          +62-8111828395
        </a>
        </Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
    </>
  )
}
