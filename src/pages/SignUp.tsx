import { FormEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { InputOfForm } from '@/components';
import { useAuthForm, useAuthContext } from '@/hooks';
import { AxiosError } from 'axios';

export const SignUp = () => {
  const {
    inputValue,
    inputMessage,
    isAblueToSignUp,
    onChangeHandler,
    onBlurHandler,
  } = useAuthForm();

  const {
    dispatch: { signup },
  } = useAuthContext();

  const navigate = useNavigate();

  const requestSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAblueToSignUp) return;

    try {
      const { email, password } = inputValue;
      await signup(email, password);

      alert('회원가입에 성공했습니다.');
      goToSignin();
    } catch (err: AxiosError) {
      const { data, status } = err.response;
      if (400 <= status && status < 500) {
        alert(data.message);
      } else {
        alert('잠시 후 다시 시도해주세요.');
      }
    }
  };

  const goToSignin = () => navigate('/signin');

  return (
    <div>
      <h1>회원가입</h1>
      <StyledForm onSubmit={requestSignUp}>
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
        <input type="submit" value="회원가입" disabled={!isAblueToSignUp} />
      </StyledForm>
    </div>
  );
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
