import React from "react"
import "./style.scss"
import ToggleSwitchTheme from "../ToggleSwitchTheme"
import ToggleLanguage from "../ToggleLanguage"

const ToggleBar = () => (
  <div className="toggle-bar">
    <div className="container">
      <ToggleSwitchTheme />
      <ToggleLanguage />
    </div>
  </div>
)

export default ToggleBar
