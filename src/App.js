import React, { useState } from "react"
import "./App.css"
import ToggleSwitch from "./ToggleSwitch"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? `App dark` : `App`}>
      <ToggleSwitch />
    </div>
  )
}

export default App
