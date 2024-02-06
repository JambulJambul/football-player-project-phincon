import { SET_LOGIN, SET_TOKEN, SET_USER_DETAILS } from '@containers/Client/constants';

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

export const setUserDetails = (userDetails) => ({
  type: SET_USER_DETAILS,
  userDetails,
});
