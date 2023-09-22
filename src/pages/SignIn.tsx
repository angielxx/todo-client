import { InputOfForm } from '@/components/InputOfForm';
import { useAuthForm } from '@/hooks/useAuthForm';
import { StyledForm } from '.';

export const SignIn = () => {
  const {
    inputValue,
    inputMessage,
    isAblueToSignIn,
    onChangeHandler,
    onBlurHandler,
  } = useAuthForm();

  const requestSignIn = () => {};

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
