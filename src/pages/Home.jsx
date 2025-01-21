import React from 'react'
import Contact from '../components/Contact'
import Plans from '../components/Plans'
import Learning from '../components/Learning'
import Collab from '../components/Collab'
import Content from '../components/Content'
import Dashboard from '../components/Dashboard'
import Vid from '../components/Vid'
import Features from '../components/Features'

const Home = () => {
  return (
<div>
  <Features />
  <Vid />
    <Dashboard />
    <Content />
    <Collab />
    <Learning />
    <Plans />
    <Contact />
    </div>
  )
}

export default Home
