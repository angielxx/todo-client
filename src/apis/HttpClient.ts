import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { TokenStorage } from '.';

const createClient = (baseURL: string, tokenStorage: TokenStorage) => {
  const axiosInstance = axios.create({ baseURL });

  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers.Authorization = 'Bearer ' + tokenStorage.get();
      return config;
    },
    (error: AxiosError) => {
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
    return this.client.delete(url, data, config);
  }
}
