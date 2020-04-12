import React, { useState } from "react"
import "./App.scss"
import ToggleSwitch from "./ToggleSwitch"
import Card from "./Card"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? `App dark` : `App`}>
      <div className="container">
        <Card />
      </div>
    </div>
  )
}

export default App
