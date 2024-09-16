const AUTH_TOKEN = "thursday_tt";

export const login = (username: string, password: string) => {
  localStorage.setItem(AUTH_TOKEN, `${username}${password.length}`);
  return true;
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
