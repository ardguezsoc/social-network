export const createUserService = (userRepository) => {
  const getUserPage = () => userRepository.getUserPage();

  return {
    getUserPage,
  };
};
