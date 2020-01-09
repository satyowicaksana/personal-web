import React from 'react'
import './Experience.scss'
import { Tabs, List, Card, Avatar, Row, Col, Divider } from 'antd'
import ScrollAnimation from 'react-animate-on-scroll'

const { TabPane } = Tabs;

const data = [
  {
    name: 'vaultron',
    title: 'Vaultron',
    description: 'Password Manager web',
    tools: [
      'React.js',
      'React Semantic UI',
      'Express',
      'Firebase'
    ],
    link: 'https://vaultron-pass.firebaseapp.com'
  },
  {
    name: 'shield',
    title: 'S.H.I.E.L.D. Database',
    description: 'Superhero List (react exercise) web',
    tools: [
      'React.js',
      'Material UI',
      'Express',
      'Firebase'
    ],
    link: 'https://shield-database.firebaseapp.com'
  },
  {
    name: 'peregrine',
    title: 'Peregrine',
    description: 'Kanban (task manager) web',
    tools: [
      'Vue.js',
      'Buefy',
      'Express',
      'Firebase'
    ],
    link: 'http://peregrine.satyowicaksana.online'
  },
  {
    name: 'fakeoverflow',
    title: 'Fake Overflow',
    description: 'Stack Overflow clone web',
    tools: [
      'Vue.js',
      'Buefy',
      'Express',
      'Mongoose'
    ],
    link: 'http://fakeoverflow.satyowicaksana.online'
  },
  {
    name: 'omniverse',
    title: 'Omniverse',
    description: 'E-commerce web',
    tools: [
      'Vue.js',
      'Vuetify',
      'Express',
      'Mongoose'
    ],
    link: 'http://omniverse.satyowicaksana.online'
  },
  {
    name: 'spotlight',
    title: 'Spotlight',
    description: 'Article Posting web',
    tools: [
      'Vue.js',
      'Buefy',
      'Express',
      'Mongoose'
    ],
    link: 'http://spotlight.satyowicaksana.com'
  },
  {
    name: 'checkit',
    title: 'Check.it',
    description: 'Todo List web',
    tools: [
      'jQuery',
      'Materialize',
      'Express',
      'Mongoose'
    ],
    link: 'http://checkit.satyowicaksana.com'
  },
]

export default () => {
  return (
    <div className="experience">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div style={{ maxWidth: '900px', margin: 'auto' }}>
          <Divider dashed><h3>Work</h3></Divider>
        </div>
        <Tabs tabPosition="top" type="card" style={{ maxWidth: '900px', margin: 'auto' }}>
          <TabPane style={{ textAlign: 'left' }}  tab="Pusilkom UI - Consulting" key="1">
            <h3>IT Consultant @ Pusilkom UI</h3>
            <h4 className="fade">Oct 2018 - Jul 2019</h4>
            <ul>
              <li>Produced IT Master Plan document for Badak LNG.</li>
            </ul>
          </TabPane>
          <TabPane style={{ textAlign: 'left' }}  tab="Pusilkom UI - Development" key="2">
            <h3>Software Engineer @ Pusilkom UI</h3>
            <h4 className="fade">Aug 2017 - Oct 2018</h4>
            <ul>
              <li>Developed SILON, a web used by KPU (Komisi Pemilihan Umum) to record election vote data.</li>
              <li>Trained SILON end-user to use the web.</li>
            </ul>
          </TabPane>
        </Tabs>
        <div style={{ maxWidth: '900px', margin: 'auto' }}>
          <Divider dashed><h3>Portfolios</h3></Divider>
        </div>
        <Row style={{ width: '300px', margin: 'auto' }}>
          <Col span={8}>
            <img className="spin" src={require('../react-logo.png')} style={{ width: '40px'}} alt="react-logo"></img>
          </Col>
          <Col span={8}>
          </Col>
          <Col span={8}>
          <img className="vue-logo" src={require('../vue-logo.png')} style={{ width: '40px'}} alt="vue-logo"></img>
          </Col>
        </Row>
        
      </ScrollAnimation>
      <br></br>
      <List
        style={{ maxWidth: '1000px', margin: 'auto' }}
        grid={{
          gutter: 15,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        pagination={{
          pageSize: 3
        }}
        dataSource={data}
        renderItem={(item, i) => (
          <ScrollAnimation key={i + 'porto'} animateIn="fadeIn" delay={i * 50}  animateOnce={true}>
            <List.Item>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Card style={{ background: '#92b9d4' }} className="project-card">
                  <Avatar src={require(`../${item.name}-logo.png`)} className="project-avatar" size={30} />
                  <h3 style={{ margin: 0 }}><b>{item.title}</b></h3>
                  <p className="fade">{item.description}</p>
                  <img style={{ width: '100%', borderRadius: '20px', marginBottom: '10px' }} src={require(`../${item.name}-thumbnail.png`)} alt="a"></img>
                  <ul>
                    {item.tools.map(tool => (
                      <li key={tool + item.name}>{tool}</li>
                    ))}
                  </ul>
                </Card>
              </a>
            </List.Item>
          </ScrollAnimation>
        )}
      />
    </div>
  )
}