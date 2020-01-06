import React from 'react'
import './Experience.scss'
import { Tabs, List, Card, Avatar } from 'antd'

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
      <h2>Work</h2>
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
      <h2 style={{ marginTop: '20px' }}>Projects</h2> 
      <List
        style={{ maxWidth: '900px', margin: 'auto' }}
        grid={{
          gutter: 15,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data.reverse()}
        renderItem={item => (
          <List.Item>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Card style={{ background: '#92b9d4' }} className="project-card">
                <Avatar src={require(`../${item.name}-logo.png`)} className="project-avatar" size={30} />
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p className="fade">{item.description}</p>
                {/* <img style={{ width: '50%', borderRadius: '20px', marginBottom: '10px' }} src={require(`../${item.name}-thumbnail.png`)} alt={`${item.name}-thumbnail`}></img> */}
                <img style={{ width: '100%', borderRadius: '20px', marginBottom: '10px' }} src={require(`../${item.name}-thumbnail.png`)} alt="a"></img>
                <ul>
                  {item.tools.map(tool => (
                    <li>{tool}</li>
                  ))}
                </ul>
              </Card>
            </a>
          </List.Item>
        )}
      />
    </div>
  )
}