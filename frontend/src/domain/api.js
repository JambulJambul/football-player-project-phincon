import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'users/create-user',
  login: 'users/login',
  personalDetails: 'users/personal-profile'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

export const fetchPokemon = () => callAPI(urls.ditto, 'GET');
export const example = () => {
  const header = {
    'Content-Type': 'multipart/form-data'
  }
  return callAPI(urls.ditto, 'GET', header);
};

export const register = (dataUser) => {
  return callAPI(urls.register, 'POST', {}, {}, dataUser);
}

export const login = (dataUser) => {
  return callAPI(urls.login, 'POST', {}, {}, dataUser)
}

export const personalDetails = (token) => {
  return callAPI(urls.personalDetails, 'GET', {}, { Authorization: `Bearer ${token}` })
}
