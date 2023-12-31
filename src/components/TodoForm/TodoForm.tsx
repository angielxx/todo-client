import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { useTodoFormStore } from '@/stores/useTodoFormStore';
import { Button, CloseBtn, DateBtn, DateCalendarBtn, Input } from '..';
import { useTodoForm, useTodoQuery } from '@/hooks';

export const TodoForm = () => {
  const { hideForm, todo, resetFormStore, isEditMode } = useTodoFormStore();

  const {
    title,
    date,
    selectedDateBtnType,
    isAbleToSubmit,
    chooseDate,
    onChangeHandler,
    resetForm,
  } = useTodoForm(todo);

  const { createTodoMutation, updateTodoMutation } = useTodoQuery(todo);

  const requestCreateTodo: MouseEventHandler = async (e) => {
    e.preventDefault();

    createTodoMutation({
      title,
      date,
      categoryId: null,
      isCompleted: false,
    });
    resetForm();
    hideForm();
  };

  const requestUpdateTodo: MouseEventHandler = async (e) => {
    e.preventDefault();

    if (!todo) return;

    updateTodoMutation({
      todoId: todo.todoId,
      title,
      date,
      categoryId: null,
      isCompleted: todo.isCompleted,
    });

    resetForm();
    hideForm();
  };

  const submitHandler = todo ? requestUpdateTodo : requestCreateTodo;

  const closeAndResetForm = () => {
    resetFormStore();
    resetForm();
    hideForm();
  };

  return (
    <FormWrapper>
      <div className="title">
        <p>{isEditMode ? '할 일 수정' : '할 일 추가'}</p>
        <CloseBtn onClick={closeAndResetForm} />
      </div>
      <StyledForm>
        <Input
          value={title}
          placeholder="할 일 내용"
          onChange={onChangeHandler}
        />
        <FlexWrapper>
          <p>날짜</p>
          <DateBtn
            label="오늘"
            isSelected={selectedDateBtnType === 'today'}
            onClick={() => chooseDate('today')}
          />
          <DateBtn
            label="내일"
            isSelected={selectedDateBtnType === 'tomorrow'}
            onClick={() => chooseDate('tomorrow')}
          />
          <DateCalendarBtn isSelected={selectedDateBtnType === 'calendar'} />
        </FlexWrapper>
        <FlexWrapper>
          <p>카테고리</p>
        </FlexWrapper>
      </StyledForm>
      <Button
        label="입력완료"
        variant={isAbleToSubmit ? 'active' : 'disabled'}
        onClick={submitHandler}
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 24px;
  box-sizing: border-box;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;
  z-index: 21;

  .title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    p {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  p {
    width: 60px;
  }
`;
