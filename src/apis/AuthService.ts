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
}
