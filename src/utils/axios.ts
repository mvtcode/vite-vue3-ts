import axios from 'axios'
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { getToken } from '@/services/authService';
import { useAppStore } from '@/stores/app.ts';
// import router from '@/router';
import {
  TIME_REQUEST_TIMEOUT,
  HTTP_CODE_200,
  HTTP_CODE_400,
  HTTP_CODE_403,
  HTTP_CODE_401,
  HTTP_CODE_500,
} from '@/constants';

const appStore = useAppStore;

const service = axios.create({
  // baseURL: process.env.API_BASE,
  timeout: TIME_REQUEST_TIMEOUT,
  responseEncoding: 'utf8',
  headers: {
    'mnp-web-client-version': '1.1.1',
    accept: 'application/json',
  },
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (getToken()) {
      config.headers.Authorization = 'Bearer ' + getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    const res = response.data;
    const statusCode = response.status;
    switch (statusCode) {
      case 200:
        break;
      case 422:
        appStore().setErrorCode(HTTP_CODE_200);
        break;
      case 400:
        appStore().setErrorCode(HTTP_CODE_400);
        break;
      case 403:
        appStore().setErrorCode(HTTP_CODE_403);
        break;
      case 401:
        appStore().setErrorCode(HTTP_CODE_401);
        break;
      case 500:
        appStore().setErrorCode(HTTP_CODE_500);
        break;
    }
    return res;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default service;
