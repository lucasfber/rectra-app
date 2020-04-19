import React from "react"
import "./style.scss"
import ToggleSwitchTheme from "../ToggleSwitchTheme"
import DropdownLanguage from "../DropdownLanguage"

const ToggleBar = ({ toggleDarkMode }) => (
  <div className="toggle-bar">
    <div className="container">
      <ToggleSwitchTheme toggleDarkMode={toggleDarkMode} />
      <DropdownLanguage />
    </div>
  </div>
)

export default ToggleBar
