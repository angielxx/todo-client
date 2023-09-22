import { ChangeEvent, FocusEvent, useState } from 'react';
import styled from 'styled-components';

import { InputOfForm } from '@/components/InputOfForm';
import { SignupInput } from '@/types/auth';
import { validateSignup } from '@/utils/validateSignup';

export const SignUp = () => {
  const [inputValue, setInputValue] = useState<SignupInput>({
    email: '',
    email2: '',
    password: '',
    password2: '',
  });

  const [inputIsBlur, setInputIsBlur] = useState({
    email: false,
    email2: false,
    password: false,
    password2: false,
  });

  const [inputIsValid, setInputIsValid] = useState({
    email: false,
    email2: false,
    password: false,
    password2: false,
  });

  const [inputMessage, setInputMessage] = useState({
    email: '',
    email2: '',
    password: '',
    password2: '',
  });

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof SignupInput;
    const value = e.target.value;

    setInputValue((prev) => {
      return { ...prev, [inputName]: value };
    });

    let isValid: boolean;
    switch (inputName) {
      case 'email':
        isValid = validateSignup.email(value);
        break;
      case 'email2':
        isValid = validateSignup.email(value) && value === inputValue.email;
        break;
      case 'password':
        isValid = validateSignup.password(value);
        break;
      case 'password2':
        isValid =
          validateSignup.password(value) && value === inputValue.password;
        break;
      default:
        break;
    }

    setInputIsValid((prev) => {
      return { ...prev, [inputName]: isValid };
    });

    setInputMessage((prev) => {
      const isEmpty = e.target.value.trim() === '';

      return {
        ...prev,
        [inputName]: isValid
          ? 'okay'
          : isEmpty
          ? EMPTY_MESSAGE[inputName]
          : ERROR_MESSAGE[inputName],
      };
    });
  };

  const changeInputIsBlur = (e: FocusEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof SignupInput;

    setInputIsBlur((prev) => {
      return { ...prev, [inputName]: true };
    });

    setInputMessage((prev) => {
      const isEmpty = e.target.value.trim() === '';

      return {
        ...prev,
        [inputName]: isEmpty
          ? EMPTY_MESSAGE[inputName]
          : ERROR_MESSAGE[inputName],
      };
    });
  };

  const ERROR_MESSAGE = {
    email: '올바른 이메일 형식이 아닙니다.',
    email2: '이메일이 일치하지 않습니다.',
    password: '올바른 비밀번호 형식이 아닙니다.',
    password2: '비밀번호가 일치하지 않습니다.',
  };

  const EMPTY_MESSAGE = {
    email: '이메일을 입력해주세요.',
    email2: '이메일을 한 번 더 입력해주세요.',
    password: '비밀번호를 입력해주세요.',
    password2: '비밀번호를 한 번 더 입력해주세요.',
  };

  return (
    <div>
      <h1>회원가입</h1>
      <Form>
        <InputOfForm
          name="email"
          message={inputMessage.email}
          placeholder="이메일"
          required
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <InputOfForm
          name="email2"
          message={inputMessage.email2}
          placeholder="이메일 확인"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <InputOfForm
          name="password"
          message={inputMessage.password}
          placeholder="비밀번호"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <InputOfForm
          name="password2"
          message={inputMessage.password2}
          placeholder="비밀번호 확인"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <input type="submit" value="회원가입" disabled={false} />
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
