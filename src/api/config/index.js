/* eslint-disable no-unused-vars */
import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as interceptors from './interceptors';
import {getLocalData, setLocalData} from "../../utils/utils";

/**
 * Web api confgiration
 */
export const webApi = (data={ auth : false,formData: false}) => {
  try {
  const baseApi = axios.create({
    baseURL:  process.env.REACT_APP_API_BASE_URL,
    useAuth: data.auth,
    formData: data.formData,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  });


  baseApi.interceptors.request.use(
    (config) => {
      const accessToken = getLocalData('accessToken');
      if (config.useAuth) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      if(config.formData){
        config.headers['Content-Type'] = 'multipart/form-data';
      }
      return config;
    },
    (error) => Promise.reject(error)
  );



  baseApi.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (!originalConfig.url.startsWith('/auth') && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const refreshToken = getLocalData('refreshToken');
            const { data } = await baseApi.post('/auth/refresh/', { refresh: refreshToken });
            const { access, refresh } = data;
            console.log(access,refresh,'access and refresh token')
            setLocalData('accessToken', access);
            setLocalData('refreshToken', refresh);
            return baseApi(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );

    console.log(process.env.REACT_APP_API_BASE_URL,"envvv2")


  axiosRetry(baseApi, { retryDelay: axiosRetry.exponentialDelay });
    console.log(process.env.REACT_APP_API_BASE_URL,"envvv3")
    return  baseApi
}
catch (e) {
  console.log(e,'hello')
}
};
