import React, { useState } from "react"
import "./App.scss"
import Card from "./Card"
import ToggleBar from "./ToggleBar"

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
        <Card />
      </div>
    </div>
  )
}

export default App
