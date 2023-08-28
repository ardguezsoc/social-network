export const userPageMapper = (users) => {
  return users.map(({ id, name, username, email, address, phone, website, company }) => {
    return {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    };
  });
};

export default { userPageMapper };
