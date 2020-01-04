import React from 'react'
import './Profile.scss'
import { Avatar, Card, Row, Col, Icon } from 'antd'
import { fadeInLeft, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

// const styles = {
//   fadeInLeft: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
//   },
//   fadeInDown: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
//   }
// }

export default () => {
  return (
    <StyleRoot>
    <div className="profile">
      <Avatar className="avatar" size={150} src={require('../avatar.jpg')} />
      <img className="blob-md" src={require('../blob-profile-1.svg')} alt="blob-profile"></img>
      <img className="blob-sm" src={require('../blob-profile-2.svg')} alt="blob-profile"></img>
      <Card className="container">
        <Row>
          <Col style={{paddingTop: '20px'}} span={12}>
            <h2>About me.</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
          <Col span={12}>
            <h2>Satyo Wicaksana</h2>
            <Icon type="calendar" /><span> 19 August 1995</span>
            <h3>Jakarta, Indonesia</h3>
          </Col>
        </Row>
      </Card>
    </div>
    </StyleRoot>
  )
}