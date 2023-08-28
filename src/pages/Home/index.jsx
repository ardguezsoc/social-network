import React from 'react';
import { useUserSource } from '../../hooks';
import { useQuery } from 'react-query';
import { UserCardList } from '../../components/UserCardList/UserCardList';
import { Toast, showToast } from '../../components/Toast';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { useTranslation } from 'react-i18next';
import './index.scss';

export const Home = () => {
  const { getUserPage } = useUserSource();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateTo = (navigationPath) => navigate(navigationPath);

  const { data: userListData = [], isLoading } = useQuery(['getUsers'], () => getUserPage(), {
    onError: () => showToast(t('toast.error'), 'error'),
  });

  return (
    <div className="mainContainer">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="homeContainer">
          <Toast />
          <UserCardList userList={userListData} navigateTo={navigateTo} />
        </div>
      )}
    </div>
  );
};
