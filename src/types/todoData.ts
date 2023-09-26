export interface TodoData {
  todoId: number;
  title: string;
  date: string;
  isCompleted: boolean;
  categoryId: number | null;
}
