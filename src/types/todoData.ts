export interface TodoData {
  id: number;
  title: string;
}

export interface CreateTodoRequestData {
  title: string;
  date: string; // ISOString
  categoryId: number | null;
}
