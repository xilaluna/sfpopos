import React from "react"
import "./App.css"
import Title from "./components/Title/Title"
import POPOSList from "./components/POPOSList/POPOSList"
import Footer from "./components/Footer/Footer"
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
