import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

export const NoDataFound = () => {
  const { t } = useTranslation();

  return (
    <div className="noDataFoundContainer">
      <div className="noDataFoundLeftContainer">
        <h2>{t('notSearchFound.title')}</h2>
        <h5>{t('notSearchFound.description1')}</h5>
        <h5>{t('notSearchFound.description2')}</h5>
      </div>
      <img src="/images/notResults.webp" alt="not-found-results-images" />
    </div>
  );
};
