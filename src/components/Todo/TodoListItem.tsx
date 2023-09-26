import { TodoData } from '@/types/todoData';

interface Props {
  todo: TodoData;
}

export const TodoListItem = ({ todo }: Props) => {
  return (
    <div>
      <p>{todo.title}</p>
    </div>
  );
};
