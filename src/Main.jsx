import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/herosection'
import "./Main.css";

const Main = () => {
  return (
    <div className='main'>
      <Navbar/>
      <Herosection/>
    </div>
  )
}

export default Main
