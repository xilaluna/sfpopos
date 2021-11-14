import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/About/About"
import POPOSList from "./components/POPOSList/POPOSList"
import POPOSDetails from "./components/POPOSDetails/POPOSDetails"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<POPOSList />} />
          <Route path="about" element={<About />} />
          <Route path="/details/:id" element={<POPOSDetails />} />
        </Route>
      </Routes>
    </Router>
    ,
  </React.StrictMode>,
  document.getElementById("root")
)
