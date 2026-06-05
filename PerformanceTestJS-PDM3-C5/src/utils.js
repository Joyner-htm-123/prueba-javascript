export const saveSession = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

export const getSession = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeSession = () => {
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return getSession() !== null;
};

export const isAdmin = () => {
  return getSession()?.role === "admin";
};