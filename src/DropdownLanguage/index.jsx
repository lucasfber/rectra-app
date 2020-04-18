import React, { useState } from "react"
import "./style.scss"
import brazilFlag from "../assets/img/brazil.png"
import usaFlag from "../assets/img/usa.png"
import i18n from "i18next"

const DropdownLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("")
  const [openDropdown, setOpenDropdown] = useState(false)

  i18n.on("initialized", function () {
    setCurrentLanguage(i18n.language)
  })

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setOpenDropdown(false)
    setCurrentLanguage(i18n.language)
  }

  return (
    <div className="dropdown-language">
      <div className="current-language" onClick={() => setOpenDropdown(true)}>
        <img src={currentLanguage === "pt_BR" ? brazilFlag : usaFlag} alt="" />
        <i className="fas fa-caret-down"></i>
      </div>
      {openDropdown && (
        <div className="dropdown-inner">
          {currentLanguage === "pt_BR" ? (
            <div className="dropdown-item" onClick={() => changeLanguage("en")}>
              <img src={usaFlag} alt="" />
              <p>Inglês (US)</p>
            </div>
          ) : (
            <div
              className="dropdown-item"
              onClick={() => changeLanguage("pt_BR")}
            >
              <img src={brazilFlag} alt="" />
              <p>Portuguese (BR)</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default DropdownLanguage
