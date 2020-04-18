import React from "react"
import "./style.scss"

const Card = ({ type, image }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card__inner">
        <img src={image} alt="" />
        <h2>571851</h2>
        <p className="covered">Pacientes curados</p>
        <p className="last-update">
          Última Atualização:
          <span>11/04/2020 | 22:27:34</span>
        </p>
      </div>
    </div>
  )
}

export default Card
