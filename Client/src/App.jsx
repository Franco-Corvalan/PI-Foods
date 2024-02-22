import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"
import Foods from "./components/Foods"
import Category from "./components/Category"

function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Foods/>
      <Category/>
    </div>
  )
}

export default App
