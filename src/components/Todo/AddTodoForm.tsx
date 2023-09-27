import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { useTodoStore } from '@/stores/useTodoStore';
import { CloseBtn } from '../CloseBtn';
import { DateBtn, DateCalendarBtn, Input } from '..';
import { useTodoForm } from '@/hooks';
import { Button } from '../Button';
import { useTodoQuery } from '@/hooks/useTodoQuery';

export const AddTodoForm = () => {
  const { hideForm } = useTodoStore();

  const {
    title,
    date,
    selectedDateBtnType,
    isAbleToSubmit,
    chooseDate,
    onChangeHandler,
    resetForm,
  } = useTodoForm();

  const { createTodoMutation } = useTodoQuery();

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

  return (
    <FormWrapper>
      <div className="title">
        <p>할 일 추가</p>
        <CloseBtn onClick={hideForm} />
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
        variant={isAbleToSubmit ? 'default' : 'disabled'}
        onClick={requestCreateTodo}
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  padding: 24px;
  box-sizing: border-box;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;

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
