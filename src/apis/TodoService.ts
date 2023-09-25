import { HttpClient } from '.';

import { CreateTodoRequestData } from '@/types/todoData';

export class TodoService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getTodo() {
    return await this.httpClient.get('/todos');
  }

  async createTodo(data: CreateTodoRequestData) {
    return await this.httpClient.post('/todos', data);
  }
}
