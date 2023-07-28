import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import processErrorHandle from './process-error-handle';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 2000;

const shouldDisplayError = (response: AxiosResponse) => !StatusCodeMapping[response.status];

const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error : AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data.message;

        processErrorHandle(detailMessage);
      }
      throw error;
    }
  );

  return api;
};


export default createAPI;
