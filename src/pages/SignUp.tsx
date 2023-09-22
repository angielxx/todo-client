import { FormEvent } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { InputOfForm } from '@/components/InputOfForm';
import { useSignUpInput } from '@/hooks/useSignUpInput';

export const SignUp = () => {
  const {
    inputValue,
    inputMessage,
    isAblueToSubmit,
    onChangeHandler,
    onBlurHandler,
  } = useSignUpInput();

  const requestSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAblueToSubmit) return;

    const { email, password } = inputValue;

    try {
      axios
        .create({ baseURL: import.meta.env.VITE_BASE_URL })
        .post('/auth/signup', {
          email,
          password,
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <Form onSubmit={requestSignUp}>
        <InputOfForm
          name="email"
          value={inputValue.email}
          message={inputMessage.email}
          placeholder="이메일"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <InputOfForm
          name="email2"
          value={inputValue.email2}
          message={inputMessage.email2}
          placeholder="이메일 확인"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <InputOfForm
          type="password"
          name="password"
          value={inputValue.password}
          message={inputMessage.password}
          placeholder="비밀번호"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <InputOfForm
          type="password"
          name="password2"
          value={inputValue.password2}
          message={inputMessage.password2}
          placeholder="비밀번호 확인"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <input type="submit" value="회원가입" disabled={!isAblueToSubmit} />
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;