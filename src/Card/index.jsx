import React from "react"
import { useTranslation } from "react-i18next"
import "./style.scss"
import createDate from "../util/date"

const Card = ({ image, recovered, lastUpdate, isLoading }) => {
  const { t } = useTranslation()
  return (
    <div className="card">
      <div className="card__inner">
        <img src={image} alt="" />
        <h2>{recovered}</h2>
        <p className="recovered">{t("card.recovered")}</p>
        <p className="last-update">
          {t("card.lastUpdate")}
          {!isLoading && <span>{createDate(lastUpdate)}</span>}
        </p>
      </div>
    </div>
  )
}

export default Card
