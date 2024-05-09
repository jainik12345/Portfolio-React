// import React from 'react'

import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/Navbar/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
    </div>
  )
}

export default App
