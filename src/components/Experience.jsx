import React from 'react'
import './Experience.scss'
import { Tabs, List, Card } from 'antd'

const { TabPane } = Tabs;

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

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
      <h2>Projects</h2> 
      <List
        style={{ maxWidth: '900px', margin: 'auto' }}
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card style={{ background: '#92b9d4', textAlign: 'left' }} title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </div>
  )
}