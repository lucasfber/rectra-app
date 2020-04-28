import React from "react"
import "./style.scss"

const ToggleSwitchTheme = ({ toggleDarkMode, isDarkMode }) => (
  <div className="toggle-switch-theme">
    <label>
      <input
        type="checkbox"
        onClick={toggleDarkMode}
        className={isDarkMode ? "checked" : ""}
      />
      <span className="switch"></span>
      <i className="fas fa-moon icon-moon"></i>
    </label>
  </div>
)

export default ToggleSwitchTheme
