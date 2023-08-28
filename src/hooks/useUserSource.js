import { useContext } from 'react';
import { InfrastructureContext } from '../context/infraestructure';

export const useUserSource = () => {
  const { userService } = useContext(InfrastructureContext);
  return { ...userService };
};

export default useUserSource;
