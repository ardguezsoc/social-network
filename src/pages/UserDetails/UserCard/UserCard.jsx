import React from 'react';
import { DetailCard } from '../DetailCard';
import './index.scss';

export const UserCard = ({ userData }) => {
  return (
    <div className="mobileDetailContainer">
      <img src="/images/profile.webp" alt="profile-image" />
      <div className="rightMobileDetailContainer">
        <DetailCard userData={userData} />
      </div>
    </div>
  );
};
