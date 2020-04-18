import React, { useState } from "react"
import "./style.scss"
import brazilFlag from "../assets/img/brazil.png"
import usaFlag from "../assets/img/usa.png"
import { useTranslation } from "react-i18next"

const DropdownLanguage = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setOpenDropdown(false)
  }

  return (
    <div className="dropdown-language">
      <div
        className="current-language"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <img src={i18n.language === "pt_BR" ? brazilFlag : usaFlag} alt="" />
        <i className="fas fa-caret-down"></i>
      </div>
      {openDropdown && (
        <div className="dropdown-inner">
          {i18n.language === "pt_BR" ? (
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
