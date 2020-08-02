import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';
import createDate from '../util/date';
import Spinner from '../Spinner';

const Card = ({ image, recovered, lastUpdate, isLoading, error }) => {
  const { t } = useTranslation();

  if (error) return <h2>Não foi possível recuperar os dados!</h2>;
  if (isLoading) return <Spinner />;
  return (
    <div className="card">
      <div className="card__inner">
        <img src={image} alt="" />
        <h2>{recovered}</h2>
        <p className="recovered">{t('card.recovered')}</p>
        <p className="last-update">
          {t('card.lastUpdate')}
          {!isLoading && <span>{createDate(lastUpdate)}</span>}
        </p>
      </div>
    </div>
  );
};

export default Card;
