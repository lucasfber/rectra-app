import React from "react"
import "./style.scss"
import ToggleSwitchTheme from "../ToggleSwitchTheme"
import DropdownLanguage from "../DropdownLanguage"

const ToggleBar = ({ toggleDarkMode, isDarkMode }) => (
  <div className="toggle-bar">
    <div className="container">
      <ToggleSwitchTheme
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <DropdownLanguage />
    </div>
  </div>
)

export default ToggleBar
