import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

export const Card = ({ userItem, navigateTo }) => {
  console.log('userItemAAA', userItem);
  const { name, userName, id } = userItem;
  const { t } = useTranslation();

  return (
    <div className="productContainer">
      <div className="product">
        <div className="productImage">
          <div className="namePrice">
            <div>
              <h3>{name}</h3>
              <h4>{userName}</h4>
            </div>
          </div>
          <p>{t('mobileDescription')}</p>
          <button className="productButton" onClick={() => navigateTo(`/users/${id}`)}>
            {t('viewMore')}
          </button>
        </div>
      </div>
    </div>
  );
};
