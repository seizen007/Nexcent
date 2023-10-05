import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import OurClient from './components/OurClient/OurClient'
import Community from './components/Community/Community'
import Unseen from './components/Unseen/Unseen'
import Helping from './components/Helping/Helping'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <OurClient/>
      <Community/>
      <Unseen/>
      <Helping/>
    </>
  )
}

export default App
