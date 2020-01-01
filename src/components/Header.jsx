import React from 'react'
import './Header.scss'
import { Button } from 'antd';

export default () => {
  return (
    <div className="header">
      <div className="diagonal">
      </div>
      <div className="container">
        <p>Hello, World! I'm</p>
        <h1>Satyo Wicaksana,</h1>
        <h1 className="fade">Software Engineer.</h1>
      </div>
    </div>
  )
}