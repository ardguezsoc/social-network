import React from 'react';
import { Card } from '../Card';
import { NoDataFound } from '../NoDataFound';
import './index.scss';

export const UserCardList = ({ userList, navigateTo }) => {
  return userList.length ? (
    <div className="wrapperGrid">
      {userList.map((userItem) => (
        <Card key={userItem.id} userItem={userItem} navigateTo={navigateTo} />
      ))}
    </div>
  ) : (
    <NoDataFound />
  );
};
