import React from "react"
import "./style.scss"
import brazilFlag from "../assets/img/brazil.png"
import usaFlag from "../assets/img/usa.png"

const DropdownLanguage = () => (
  <div className="dropdown-language">
    <div className="current-language">
      <img src={brazilFlag} alt="" />
      <i className="fas fa-caret-down"></i>
    </div>
    <div className="dropdown-inner">
      <div className="dropdown-item">
        <img src={usaFlag} alt="" />
        <p>Inglês (US)</p>
      </div>
      {/* <div className="dropdown-item">
        <img src={brazilFlag} alt="" />
        <p>Portuguese (BR)</p>
</div> */}
    </div>
  </div>
)

export default DropdownLanguage
