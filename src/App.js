import React, { useState } from "react"
import "./App.scss"
import Card from "./Card"
import ToggleBar from "./ToggleBar"
import globe from "./assets/img/globe.svg"
import brazil from "./assets/img/brazil.svg"
import darkGlobe from "./assets/img/dark-globe.svg"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  /*  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
 */
  return (
    <div className={darkMode ? `App dark` : `App`}>
      <ToggleBar />
      <div className="container">
        <Card image={globe} />
        <Card image={brazil} />
      </div>
    </div>
  )
}

export default App
