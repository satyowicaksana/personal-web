import React from 'react'
import './Profile.scss'
import { Avatar, Card, Row, Col, List } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    id: 'h8',
    title: 'Hacktiv8',
    description: 'Fullstack Javascript Immersive Graduate',
    link: 'https://hacktiv8.com',
    imageLink: 'https://hire.hacktiv8.com/verify/fsjs/SatyoWicaksana-20191219'
  },
  {
    id: 'ui',
    title: 'University of Indonesia',
    description: 'Bachelor Degree of Information System',
    link: 'https://ui.ac.id',
    imageLink: 'https://hire.hacktiv8.com/verify/fsjs/SatyoWicaksana-20191219'
  }
];
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
    <div className="profile">
      <Avatar className="avatar" size={150} src={require('../avatar.jpg')} />
      <img className="blob-md" src={require('../blob-profile-1.svg')} alt="blob-profile"></img>
      <img className="blob-sm" src={require('../blob-profile-2.svg')} alt="blob-profile"></img>
      <Card className="container">
        <Row>
          <Col span={12}>
            <h2>About me.</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
          <Col span={12}>
            <h2>Satyo Wicaksana</h2>
            <FontAwesomeIcon icon={faCalendarAlt} /><span> 19 August 1995</span><br></br>
            <FontAwesomeIcon icon={faMapMarkerAlt} /><span> Jakarta, Indonesia</span>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item
                  extra={
                    <a href={item.imageLink} target="_blank" rel="noopener noreferrer">
                      <img
                        width={100}
                        alt="logo"
                        src={require(`../${item.id}-certificate.png`)}
                      />
                    </a>
                  }>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Card>
    </div>
  )
}