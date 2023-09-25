import { HttpClient } from '.';

export class TodoService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getTodo() {
    return await this.httpClient.get('/todos');
  }
}
