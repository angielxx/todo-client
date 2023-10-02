import { MouseEventHandler } from 'react';
import styled, { RuleSet, css } from 'styled-components';

import { TodoData } from '@/types/todoData';
import { useTodoQuery } from '@/hooks';

interface Props {
  todo: TodoData;
}

export const TodoCheckBtn = ({ todo }: Props) => {
  const { isCompleted } = todo;

  const { updateTodoMutation } = useTodoQuery(todo);

  const changeTodoIsCompleted: MouseEventHandler = () => {
    updateTodoMutation({ ...todo, isCompleted: !todo.isCompleted });
  };

  return (
    <CheckBtn $isCompleted={isCompleted} onClick={changeTodoIsCompleted}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    </CheckBtn>
  );
};

const CheckBtn = styled.div<{ $isCompleted: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 99px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 12px;
    height: 12px;
  }

  ${({ $isCompleted }) =>
    $isCompleted ? TYPE_VARIANTS.completed : TYPE_VARIANTS.notCompleted};
`;

type CheckBtnVariantsType = 'completed' | 'notCompleted';

const TYPE_VARIANTS: { [key in CheckBtnVariantsType]: RuleSet } = {
  completed: css`
    background-color: ${({ theme }) => theme.colors.main};
    border-color: ${({ theme }) => theme.colors.main};

    svg {
      fill: white;
    }
  `,
  notCompleted: css`
    border-color: ${({ theme }) => theme.colors.disabled};

    svg {
      display: none;
    }
  `,
};
