import React from "react"
import "./style.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Fonte:</p>
        <ul>
          <li>
            <a
              href="https://systems.jhu.edu/"
              title="Johns Hopkins University (Center for Systems Science and Engineering)"
              rel="noopener noreferrer"
              target="_blank"
            >
              Johns Hopkins University (CSSE)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mathdroid/covid-19-api"
              title="COVID-19 global data (from JHU CSSE for now) as-a-service"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mathdroid API (CSSE)
            </a>
          </li>
        </ul>
        <div className="note-section">
          <span>Nota!</span> Essa aplicação foi desenvolvida apenas para
          propósitos educacionais. Você pode conferir o seu código{" "}
          <a rel="noopener noreferrer" target="_blank" href="#/">
            aqui
          </a>
        </div>
        <div className="credits">
          <p>
            Desenvolvido por{" "}
            <a href="#/" rel="noopener noreferrer" target="_blank">
              Lucas Bertoldo
            </a>
            . 2020
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
