import axios from 'axios';
import { service_backend_url } from '../../config';
import { userPageMapper, userMapper } from './mapper';

export const createUserRepository = () => {
  const getUserPage = async () => {
    const usersPage = await axios.get(`${service_backend_url}/users/`);
    return userPageMapper(usersPage.data);
  };

  const getUserDetails = async (id) => {
    const userDetail = await axios.get(`${service_backend_url}/users/${id}`);

    return userMapper(userDetail.data);
  };

  return {
    getUserPage,
    getUserDetails,
  };
};
