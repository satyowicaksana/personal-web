import React from 'react'
import './Profile.scss'
import { Avatar, Card, Row, Col, List, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    id: 'h8',
    title: 'Hacktiv8',
    description: 'Fullstack Javascript Immersive Graduate',
    link: 'https://hacktiv8.com',
    imageLink: 'https://hire.hacktiv8.com/verify/fsjs/SatyoWicaksana-20191219',
    avatarLink: 'https://rec-data.kalibrr.com/www.kalibrr.ph/logos/LUJD7AZSJQB8A6XTF3ZXZYZ287EFXYAR9SH2LMPU-5d0b4f48.png'
  },
  {
    id: 'ui',
    title: 'University of Indonesia',
    description: 'Bachelor Degree of Information System',
    link: 'https://ui.ac.id',
    imageLink: 'https://hire.hacktiv8.com/verify/fsjs/SatyoWicaksana-20191219',
    avatarLink: 'https://motionsportindonesia.com/wp-content/uploads/2017/02/UI.jpg'
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
    <div name="profile" className="profile">
      <Avatar className="avatar" src={require('../avatar.jpg')} />
      <img className="blob-md" src={require('../blob-profile-1.svg')} alt="blob-profile"></img>
      <img className="blob-sm" src={require('../blob-profile-2.svg')} alt="blob-profile"></img>
      <Card className="container">
        <Row>
          <Col className="about" xs={24} sm={24} md={24} lg={12} xl={12}>
            <h2>About me.</h2>
            Hi, I'm Satyo. I'm a <b>fullstack javascript developer</b> based in Jakarta. I enjoy building websites and apps with modern and responsive user interface along with efficient backends.<br></br><br></br>
            After graduating from <b>University of Indonesia</b>, I worked there as a java developer. In 2019, I joined <b>Hacktiv8</b>, a coding bootcamp, to improve my coding skills and knowledge and now I'm sure to build my career in the software engineering world.<br></br>
            <Button className="button" style={{marginTop: '20px', marginBottom: '20px'}} type="primary" shape="round" size="large">
              See Resume
            </Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
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
                    avatar={<Avatar size={50} src={item.avatarLink} />}
                    title={<a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Card>
      <svg style={{ position: 'absolute', bottom: 0, zIndex: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0B7BC5" fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,186.7C672,171,768,181,864,197.3C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}