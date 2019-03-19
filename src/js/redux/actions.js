const changeLocation = location => ({
  type: "CHANGE_LOCATION",
  location: location
});

const setUser = (user) => ({
  type: "SET_USER",
  user: user
});

export { changeLocation, setUser };