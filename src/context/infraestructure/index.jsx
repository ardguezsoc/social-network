import React from 'react';
import { createUserRepository } from '../../repositories/user';
import { createUserService } from '../../services/user';

export const InfrastructureContext = React.createContext();

export const InfrastructureProvider = ({ children }) => {
  const userRepository = createUserRepository();
  const userService = createUserService(userRepository);

  return <InfrastructureContext.Provider value={{ userService }}>{children}</InfrastructureContext.Provider>;
};
