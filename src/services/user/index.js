export const createUserService = (userRepository) => {
  const getUserPage = () => userRepository.getUserPage();
  const getUserDetails = (id) => userRepository.getUserDetails(id);
  return {
    getUserPage,
    getUserDetails,
  };
};
