import React from 'react'
import './Contact.scss'
import { Button } from 'antd'

export default () => {
  return (
    <>
    <svg style={{ position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0B7BC5" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,165.3C672,160,768,128,864,96C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> 
    <div className="contact">
      <h2 style={{ position: 'relative', textAlign: 'right'  }}>Contact me.</h2>
      <div style={{ marginTop: '20vh'}}>
        <p>I'm currently looking for an opportunity to work as a Software Engineer, preferably as a Front-End Developer<br></br>
        I'm open for a fulltime job or some freelance project.</p>
        <a href="mailto:satyowicaksana@gmail.com">
          <Button className="button" shape="round" size="large" type="primary">Get In Touch</Button>
        </a>
      </div>

    </div>
    </>
  )
}