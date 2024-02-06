import { SET_LOGIN, SET_TOKEN } from '@containers/Client/constants';

export const setLogin = (login) => {
  console.log(login)
  return {
    type: SET_LOGIN,
    login,
  }
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});
