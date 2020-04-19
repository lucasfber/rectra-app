import React from "react"
import { useTranslation } from "react-i18next"
import "./style.scss"

const Card = ({ image }) => {
  const { t } = useTranslation()

  return (
    <div className="card dark">
      <div className="card__inner">
        <img src={image} alt="" />
        <h2>594192</h2>
        <p className="recovered">{t("card.recovered")}</p>
        <p className="last-update">
          {t("card.lastUpdate")}
          <span>11/04/2020 | 22:27:34</span>
        </p>
      </div>
    </div>
  )
}

export default Card
