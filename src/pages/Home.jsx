import React from 'react'
import Contact from '../components/Contact'
import Plans from '../components/Plans'
import Learning from '../components/Learning'
import Collab from '../components/Collab'
import Content from '../components/Content'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
<div>
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
