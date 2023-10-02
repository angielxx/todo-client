import { HttpClient } from './HttpClient';

export class AuthService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
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

  async logout() {
    return await this.httpClient.post('/auth/logout', {
      refresh_token: localStorage.getItem('refresh_token'),
    });
  }
}
