import React from "react"
import "./App.css"
import Title from "./components/Title/Title"
import POPOSList from "./components/POPOSList/POPOSList"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
    </div>
  )
}

export default App
