import { useNavigate } from 'react-router';

import { InputOfForm } from '@/components';
import { StyledForm } from '.';
import { useAuthContext, useAuthForm } from '@/hooks';
import { FormEvent } from 'react';
import { CustomError } from '@/types/error';

export const SignIn = () => {
  const {
    inputValue,
    inputMessage,
    isAblueToSignIn,
    onChangeHandler,
    onBlurHandler,
  } = useAuthForm();

  const {
    dispatch: { signin, onLoginSuccess },
  } = useAuthContext();

  const navigate = useNavigate();

  const requestSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAblueToSignIn) return;

    try {
      const { email, password } = inputValue;
      const {
        data: { access_token },
      } = await signin(email, password);

      alert('로그인에 성공했습니다.');

      onLoginSuccess(access_token);

      goToTodo();
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

  const goToTodo = () => navigate('/todo');

  return (
    <div>
      <h1>로그인</h1>
      <StyledForm onSubmit={requestSignIn}>
        <InputOfForm
          name="email"
          value={inputValue.email}
          message={inputMessage.email}
          placeholder="이메일"
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
        <input type="submit" value="로그인" disabled={!isAblueToSignIn} />
      </StyledForm>
    </div>
  );
};
