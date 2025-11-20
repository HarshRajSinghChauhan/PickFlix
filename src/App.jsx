import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards/Card'
import CardComponent from './components/Cards/Card'
import CardsTab from './components/Cards/CardsTab'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <CardsTab />
    </>
  )
}

export default App
