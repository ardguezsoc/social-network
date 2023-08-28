export const userPageMapper = (users) => {
  return users.map((user) => userMapper(user));
};
export const userMapper = ({ id, name, username, email, address, phone, website, company }) => ({
  id: id,
  name: name,
  username: username,
  email: email,
  address: address,
  phone: phone,
  website: website,
  company: company,
});

export default { userPageMapper };
