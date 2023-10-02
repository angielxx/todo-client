import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { Button, InputOfForm, PageTitle } from '@/components';
import { useAuthForm, useAuthContext } from '@/hooks';
import { Link } from 'react-router-dom';
import { CustomError } from '@/types/error';

export const SignUp = () => {
  const {
    inputValue,
    inputMessage,
    isAblueToSignUp,
    inputVariants,
    onChangeHandler,
    onBlurHandler,
  } = useAuthForm();

  const {
    dispatch: { signup },
  } = useAuthContext();

  const navigate = useNavigate();

  const requestSignUp: MouseEventHandler = async (e) => {
    e.preventDefault();

    if (!isAblueToSignUp) return;

    try {
      const { email, password } = inputValue;
      await signup(email, password);

      alert('회원가입에 성공했습니다.');

      goToSignin();
    } catch (err: unknown) {
      if (err instanceof CustomError) {
        const data = err.response?.data as { message: string };
        const status = err.response?.status as number;

        if (400 <= status && status < 500) {
          alert(data.message);
        } else {
          alert('잠시 후 다시 시도해주세요.');
        }
      }
    }
  };

  const goToSignin = () => navigate('/signin');

  return (
    <AuthPageWrapper>
      <div>
        <PageTitle title="회원가입" />
        <StyledForm>
          <InputOfForm
            type="text"
            name="email"
            value={inputValue.email}
            message={inputMessage.email}
            placeholder="이메일"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            variant={inputVariants.email}
          />
          <InputOfForm
            type="text"
            name="email2"
            value={inputValue.email2}
            message={inputMessage.email2}
            placeholder="이메일 확인"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            variant={inputVariants.email2}
          />
          <InputOfForm
            type="password"
            name="password"
            value={inputValue.password}
            message={inputMessage.password}
            placeholder="비밀번호"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            variant={inputVariants.password}
          />
          <InputOfForm
            type="password"
            name="password2"
            value={inputValue.password2}
            message={inputMessage.password2}
            placeholder="비밀번호 확인"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            variant={inputVariants.password2}
          />
        </StyledForm>
      </div>
      <BottonWrapper>
        <Button
          label="회원가입"
          variant={isAblueToSignUp ? 'active' : 'disabled'}
          onClick={requestSignUp}
        />
        <GuidMsg>
          이미 게정이 있으신가요? <Link to="/signin">로그인하기</Link>
        </GuidMsg>
      </BottonWrapper>
    </AuthPageWrapper>
  );
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const GuidMsg = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMain};
  font-weight: 400;

  a {
    color: ${({ theme }) => theme.colors.textMain};
    text-decoration: none;
    font-weight: 700;
  }
`;

export const AuthPageWrapper = styled.div`
  padding: 24px;
  box-sizing: border-box;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: space-between;

  h1 {
    margin-bottom: 60px;
  }

  div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BottonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    margin-bottom: 12px;
  }
`;
