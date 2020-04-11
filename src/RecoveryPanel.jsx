import React, { useState, useEffect } from "react"
import { englishText, ptBrText } from "./util/lang"
import brazilFlag from "./assets/img/brazil.png"
import ukFlag from "./assets/img/uk.png"
import ToggleSwitchTheme from "./ToggleSwitchTheme"

const RecoveryPanel = () => {
  useEffect(() => {
    getData()
  }, [])

  const [recoveredData, setRecoveredData] = useState({
    recoveredBrazil: 0,
    brazilianLastUpdate: null,
    recoveredGlobal: 0,
    globalLastUpdate: null,
  })

  const [loading, setLoading] = useState(false)
  const [languageText, setLanguageText] = useState(ptBrText)
  const [englishLanguage, setEnglishLanguage] = useState(false)

  const getData = async () => {
    setLoading(true)
    const globalResult = await fetch("https://covid19.mathdro.id/api/")
    const globalData = await globalResult.json()
    const brazilianResult = await fetch(
      "https://covid19.mathdro.id/api/countries/BR"
    )
    const brazilianData = await brazilianResult.json()
    setLoading(false)
    setRecoveredData({
      recoveredBrazil: brazilianData.recovered.value,
      brazilianLastUpdate: brazilianData.lastUpdate,
      recoveredGlobal: globalData.recovered.value,
      globalLastUpdate: globalData.lastUpdate,
    })
  }

  const toggleLanguage = () => {
    setEnglishLanguage(!englishLanguage)

    changeLanguage()
  }

  const changeLanguage = () => {
    englishLanguage ? setLanguageText(ptBrText) : setLanguageText(englishText)
  }

  const formatDateTime = (lastUpdate) => {
    const date = new Date(lastUpdate)
    console.log(date)
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    }`
  }

  const {
    loadingText,
    recoveredBrazil,
    lastUpdate,
    recoveredWorld,
  } = languageText

  return (
    <div>
      {/* <div className="checkbox">
        <label>
          <img src={brazilFlag} alt="" />
          <input
            className="checkbox-language"
            type="checkbox"
            onChange={toggleLanguage}
          />
          <span className="checkbox__toggle"></span>
          <img src={ukFlag} alt="" />
        </label>
  </div> */}

      {loading && <h4>{loadingText}</h4>}

      <ToggleSwitchTheme />
      <h1>{recoveredBrazil}</h1>
      <h3>{recoveredData.recoveredBrazil}</h3>
      <p>
        {lastUpdate} {formatDateTime(recoveredData.brazilianLastUpdate)}{" "}
      </p>

      <h1>{recoveredWorld}</h1>
      <h3>{recoveredData.recoveredGlobal}</h3>
      <p>
        {lastUpdate} {formatDateTime(recoveredData.globalLastUpdate)}
      </p>
    </div>
  )
}

export default RecoveryPanel
