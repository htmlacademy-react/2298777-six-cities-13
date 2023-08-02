import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';

const URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  return api;
};


export default createAPI;
