import styled, { RuleSet, css } from 'styled-components';

import { TodoData } from '@/types/todoData';
import { TodoCheckBtn } from './TodoCheckBtn';
import { TodoListItemContent } from './TodoListItemContent';

interface Props {
  todo: TodoData;
}

export const TodoListItem = ({ todo }: Props) => {
  const { isCompleted } = todo;

  return (
    <StyledItem $isCompleted={isCompleted}>
      <TodoCheckBtn todo={todo} />
      <TodoListItemContent todo={todo} />
    </StyledItem>
  );
};

const StyledItem = styled.div<{ $isCompleted: boolean }>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textMain};
  padding: 12px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  ${({ $isCompleted }) =>
    $isCompleted ? TYPE_VARIANTS.completed : TYPE_VARIANTS.notCompleted}
`;

type TodoItemVariantsType = 'completed' | 'notCompleted';

const TYPE_VARIANTS: { [key in TodoItemVariantsType]: RuleSet } = {
  completed: css`
    color: ${({ theme }) => theme.colors.textDisabled};
    text-decoration: line-through;
  `,
  notCompleted: css`
    color: ${({ theme }) => theme.colors.textMain};
  `,
};
