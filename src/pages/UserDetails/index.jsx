import React from 'react';
import { useParams } from 'react-router-dom';
import { BackArrow } from '../../components/BackArrow';
import { useNavigate } from 'react-router-dom';
import { Toast, showToast } from '../../components/Toast';
import { useUserSource } from '../../hooks';
import { Spinner } from '../../components/Spinner';
import { UserCard } from './UserCard';
import './index.scss';

import { useQuery } from 'react-query';

export const UserDetails = () => {
  const { getUserDetails } = useUserSource();

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: userDetails = [], isLoading } = useQuery([`getUserDetails${id}`], () => getUserDetails(id), {
    onError: () => showToast('Error fetching user details', 'error'),
  });

  return (
    <div className="mainContainer">
      <BackArrow goBack={() => navigate(-1)} />
      <Toast />
      {isLoading ? <Spinner /> : <UserCard userData={userDetails} />}
    </div>
  );
};

export default UserDetails;
