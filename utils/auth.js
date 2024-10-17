import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get('token');
};

export const setToken = (token) => {
  Cookies.set('token', token, { secure: false, httpOnly: false });
};

export const removeToken = () => {
  Cookies.remove('token');
};

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};