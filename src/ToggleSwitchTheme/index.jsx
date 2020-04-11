import React from "react"
import "./style.css"

const ToggleSwitchTheme = () => (
  <div className="toggle-theme">
    <label>
      <input type="checkbox" />
      <span className="toggle"></span>
      <i className="fas fa-moon icon-moon"></i>
    </label>
  </div>
)

export default ToggleSwitchTheme
