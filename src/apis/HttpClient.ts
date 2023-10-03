import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { TokenStorage } from '.';

const createClient = (baseURL: string, tokenStorage: TokenStorage) => {
  const axiosInstance = axios.create({ baseURL, withCredentials: true });

  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers.Authorization = 'Bearer ' + tokenStorage.get();
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError | Error) => {
      const _err = error as unknown as AxiosError;
      const { response } = _err;
      const originalRequest = _err.config as InternalAxiosRequestConfig;

      if (response && response.status === 401) {
        try {
          const {
            data: { access_token, refresh_token },
          } = await axiosInstance.post('/auth/refreshToken', {
            refresh_token: localStorage.getItem('refresh_token'),
          });

          tokenStorage.save(access_token, refresh_token);

          originalRequest.headers.Authorization = 'Bearer ' + access_token;

          return axios(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export class HttpClient {
  client: AxiosInstance;

  constructor(baseURL: string, tokenStorage: TokenStorage) {
    this.client = createClient(baseURL, tokenStorage);
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.client.get(url, config);
  }

  post(url: string, data?: Record<string, any>, config?: AxiosRequestConfig) {
    return this.client.post(url, data, config);
  }

  put(url: string, data?: Record<string, any>, config?: AxiosRequestConfig) {
    return this.client.put(url, data, config);
  }

  delete(url: string, data?: Record<string, any>, config?: AxiosRequestConfig) {
    return this.client.delete(url, config);
  }
}
