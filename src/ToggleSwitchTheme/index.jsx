import React from "react"
import "./style.scss"

const ToggleSwitchTheme = ({ toggleDarkMode }) => (
  <div className="toggle-switch-theme">
    <label>
      <input type="checkbox" onClick={toggleDarkMode} />
      <span className="switch"></span>
      <i className="fas fa-moon icon-moon"></i>
    </label>
  </div>
)

export default ToggleSwitchTheme
