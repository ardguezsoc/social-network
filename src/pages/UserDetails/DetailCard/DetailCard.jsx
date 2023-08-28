import React from 'react';
import { useTranslation } from 'react-i18next';

export const DetailCard = ({ userData }) => {
  const { name, username, email, address, phone, website, company } = userData;

  const { t } = useTranslation();

  return (
    <>
      <div className="wrapMobileDetail">
        <h2>{name}</h2>
        <div className="mobileDetailPriceContainer fullGridrow">
          <p className="mobileDetailNewPrice">{username}</p>
        </div>
        <div> {t('email')}</div>
        <div>{email}</div>
        <div> {t('phone')}</div>
        <div>{phone}</div>
        <div> {t('city')}</div>
        <div>{address.city}</div>
        <div>{t('website')}</div>
        <div>{website}</div>
        <div>{t('company')}</div>
        <div>{company.name}</div>
      </div>
    </>
  );
};
