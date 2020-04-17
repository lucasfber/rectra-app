import React from "react"
import "./style.scss"
/* import brazilFlag from "../assets/img/brazil.png" */
import ukFlag from "../assets/img/uk.png"

const ToggleLanguage = () => (
  <div className="toggle-language">
    <img src={ukFlag} alt="" />
    <p>UK</p>
  </div>
)

export default ToggleLanguage
