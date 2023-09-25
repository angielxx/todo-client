import styled from 'styled-components';

import { useTodoStore } from '@/stores/useTodoStore';
import { CloseBtn } from '../CloseBtn';
import { Input } from '..';
import { useTodoForm } from '@/hooks/useTodoForm';
import { getToday } from '@/utils/getToday';

export const AddTodoForm = () => {
  const { hideForm } = useTodoStore();

  const { inputValue, date, chooseDate, onChangeHandler } = useTodoForm();

  const requestCreateTodo = () => {};

  const today = getToday();
  const tomorrow = new Date(getToday().getTime() + 1000 * 60 * 60 * 24);

  return (
    <FormWrapper>
      <div className="title">
        <p>할 일 추가</p>
        <CloseBtn onClick={hideForm} />
      </div>
      <form onSubmit={requestCreateTodo}>
        <Input
          value={inputValue}
          placeholder="할 일 내용"
          onChange={onChangeHandler}
        />
        <div>
          <p>날짜</p>
          <div onClick={() => chooseDate(today)}>오늘</div>
          <div onClick={() => chooseDate(tomorrow)}>내일</div>
        </div>
        <div>
          <p>카테고리</p>
        </div>
        <div>입력 완료</div>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  border: 1px solid red;
  padding: 24px;
  box-sizing: border-box;

  .title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
