import React, { useState, Suspense, useEffect } from "react"
import "./App.scss"
import "./i18n"
import Card from "./Card"
import ToggleBar from "./ToggleBar"
import globe from "./assets/img/globe.svg"
import brazil from "./assets/img/brazil.svg"
import darkGlobe from "./assets/img/dark-globe.svg"
import Footer from "./Footer"
import Spinner from "./Spinner"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [recoveredData, setRecoveredData] = useState({})

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const globalResults = await fetch("https://covid19.mathdro.id/api")
      const globalRecovered = await globalResults.json()

      const brazilianResult = await fetch(
        "https://covid19.mathdro.id/api/countries/BR"
      )

      const brazilianRecovered = await brazilianResult.json()

      setRecoveredData({
        globalRecovered: globalRecovered.recovered.value,
        globalLastUpdate: globalRecovered.lastUpdate,
        brazilianRecovered: brazilianRecovered.recovered.value,
        brazilianLastUpdate: brazilianRecovered.lastUpdate,
      })
      setLoading(false)
    }

    getData()
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    /*  */
    <div className={darkMode ? `App dark` : `App`}>
      <Suspense fallback={null}>
        <ToggleBar toggleDarkMode={toggleDarkMode} />

        <div className="container">
          <Spinner />
          <Card
            isLoading={loading}
            image={darkMode ? darkGlobe : globe}
            recovered={recoveredData.globalRecovered}
            lastUpdate={recoveredData.globalLastUpdate}
          />
          <Card
            isLoading={loading}
            image={brazil}
            recovered={recoveredData.brazilianRecovered}
            lastUpdate={recoveredData.brazilianLastUpdate}
          />
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
