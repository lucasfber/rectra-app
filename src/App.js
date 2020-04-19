import React, { useState, Suspense } from "react"
import "./App.scss"
import "./i18n"
import Card from "./Card"
import ToggleBar from "./ToggleBar"
import globe from "./assets/img/globe.svg"
import brazil from "./assets/img/brazil.svg"
import darkGlobe from "./assets/img/dark-globe.svg"
import Footer from "./Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    /*  */
    <div className={darkMode ? `App dark` : `App`}>
      <Suspense fallback={null}>
        <ToggleBar toggleDarkMode={toggleDarkMode} />
        <div className="container">
          <Card image={darkMode ? darkGlobe : globe} />
          <Card image={brazil} />
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
