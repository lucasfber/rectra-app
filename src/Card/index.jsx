import React from "react"
import "./style.scss"
import globe from "../assets/img/globe.svg"
import darkGlobe from "../assets/img/dark-globe.svg"

const Card = ({ type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card__inner">
        <img src={type ? darkGlobe : globe} alt="" />
        <h2>1777517</h2>
        <p className="covered">Pessoas curadas</p>
        <p className="last-update">Última Atualização: 02/04/2020</p>
      </div>
    </div>
  )
}

export default Card
