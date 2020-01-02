import React from 'react'
import './Header.scss'
import { Row, Col, Button } from 'antd';
import { fadeInLeft, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}

export default () => {
  return (
    <StyleRoot>
    <div className="header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,202.7C672,224,768,224,864,224C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="container">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="introduction">
        <div>
          <p style={styles.fadeInLeft}>Hello, World! I'm</p>
          <h1 style={styles.fadeInLeft}>Satyo Wicaksana,</h1>
          <h1 style={styles.fadeInLeft} className="fade">Software Engineer.</h1>
        </div>
        <div style={styles.fadeInLeft}>
        <Button style={{marginTop: '20px'}} type="primary" shape="round" size="large">
          Get to Know Me
        </Button>
        </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <img style={styles.fadeInDown} className="illustration" src={require('../landing-illustration.svg')} alt="programmer"></img>
        </Col>
      </Row>
        </div>
    </div>
    </StyleRoot>
  )
}