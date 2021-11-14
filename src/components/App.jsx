import React from "react"
import "./App.css"
import Title from "./Title/Title"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
