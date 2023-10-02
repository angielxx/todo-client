import { useNavigate } from 'react-router';

import { InputOfForm, PageTitle } from '@/components';
import { BottonWrapper, GuidMsg, StyledForm, AuthPageWrapper } from '.';
import { useAuthContext, useAuthForm } from '@/hooks';
import { MouseEventHandler } from 'react';
import { CustomError } from '@/types/error';
import { Button } from '@/components/Common/Button';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const {
    inputValue,
    inputMessage,
    isAblueToSignIn,
    inputVariants,
    onChangeHandler,
    onBlurHandler,
  } = useAuthForm();

  const {
    dispatch: { signin, onLoginSuccess },
  } = useAuthContext();

  const navigate = useNavigate();

  const requestSignIn: MouseEventHandler = async (e) => {
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
    <AuthPageWrapper>
      <div>
        <PageTitle title="로그인" />
        <StyledForm>
          <InputOfForm
            name="email"
            value={inputValue.email}
            message={inputMessage.email}
            placeholder="이메일"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            variant={inputVariants.email}
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
        </StyledForm>
      </div>
      <BottonWrapper>
        <Button
          label="회원가입"
          variant={isAblueToSignIn ? 'default' : 'disabled'}
          onClick={requestSignIn}
        />
        <GuidMsg>
          아직 계정이 없으신가요? <Link to="/signup">가입하기</Link>
        </GuidMsg>
      </BottonWrapper>
    </AuthPageWrapper>
  );
};
