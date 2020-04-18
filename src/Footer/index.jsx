import React from "react"
import "./style.scss"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="container">
        <p>{t("footer.source")}</p>
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
          <span>{t("footer.note")} </span>
          {t("footer.noteContent")}
          <a rel="noopener noreferrer" target="_blank" href="#/">
            {t("footer.repositoryLink")}
          </a>
        </div>
        <div className="credits">
          <p>
            {t("footer.developedBy")}{" "}
            <a
              href="https://github.com/lucasfber"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lucas Bertoldo
            </a>
            . {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
