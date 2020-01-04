import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import './Home.scss'

export default () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if(loading) {
    return (
      <div className="home">
        <img src={require('../logo.png')} className="spinner" alt="logo"/>
      </div>
    )
  }
  return (
    <div>
      <Header></Header>
      <Profile></Profile>
      <Experience></Experience>
    </div>
  )
}