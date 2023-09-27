import { HttpClient } from '.';

import { TodoData } from '@/types/todoData';

export class TodoService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getTodo() {
    return await this.httpClient.get('/todos');
  }

  async getTodoByDate(date: string) {
    const {
      data: { todos },
    } = await this.httpClient.get(`/todos?date=${date}`);
    return todos;
  }

  async createTodo(data: Omit<TodoData, 'todoId'>) {
    const response = await this.httpClient.post('/todos', data);
    return response.data;
  }

  async updateTodo(data: TodoData) {
    const response = await this.httpClient.put(`/todos/${data.todoId}`, data);
    return response.data.todo;
  }

  async deleteTodo(todoId: number) {
    return await this.httpClient.delete(`/todos/${todoId}`);
  }
}
