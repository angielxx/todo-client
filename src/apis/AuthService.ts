import { TokenStorage } from '.';
import { HttpClient } from './HttpClient';

export class AuthService {
  private httpClient: HttpClient;
  private tokenStorage: TokenStorage;

  constructor(httpClient: HttpClient, tokenStorage: TokenStorage) {
    this.httpClient = httpClient;
    this.tokenStorage = tokenStorage;
  }

  async signup(email: string, password: string) {
    return await this.httpClient.post('/auth/signup', {
      email,
      password,
    });
  }

  async signin(email: string, password: string) {
    return await this.httpClient.post('/auth/signin', {
      email,
      password,
    });
  }

  async refreshToken() {
    return await this.httpClient.post('/auth/refreshToken', {
      refresh_token: localStorage.getItem('refresh_token'),
    });
  }
}
