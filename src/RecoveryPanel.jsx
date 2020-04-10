import React, { useState, useEffect } from "react"

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

  const formatDateTime = (lastUpdate) => {
    const date = new Date(lastUpdate)
    console.log(date)
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    }`
  }

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      <h1>Recovered BR</h1>
      <h3>{recoveredData.recoveredBrazil}</h3>
      <p>
        Last update: {formatDateTime(recoveredData.brazilianLastUpdate)}{" "}
        (Horário de Brasília)
      </p>

      <h1>Recovered Global</h1>
      <h3>{recoveredData.recoveredGlobal}</h3>
      <p>
        Last update: {formatDateTime(recoveredData.globalLastUpdate)} (Horário
        de Brasília)
      </p>
    </div>
  )
}

export default RecoveryPanel
