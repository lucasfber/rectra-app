import React from "react"
import "./style.scss"

const ToggleSwitchTheme = () => (
  <div className="toggle-switch">
    <label>
      <input type="checkbox" />
      <span className="switch"></span>
      <i className="fas fa-moon icon-moon"></i>
    </label>
  </div>
)

export default ToggleSwitchTheme
