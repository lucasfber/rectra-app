import React from "react"
import "./style.scss"
import ToggleSwitchTheme from "../ToggleSwitchTheme"
import DropdownLanguage from "../DropdownLanguage"

const ToggleBar = () => (
  <div className="toggle-bar">
    <div className="container">
      <ToggleSwitchTheme />
      <DropdownLanguage />
    </div>
  </div>
)

export default ToggleBar
