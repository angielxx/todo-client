import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { InputOfForm } from '@/components/InputOfForm';
import { SignUpInput } from '@/types/signUp';
import { validateSignUp } from '@/utils/validateSignUp';

export const SignUp = () => {
  const [inputValue, setInputValue] = useState<SignUpInput>({
    email: '',
    email2: '',
    password: '',
    password2: '',
  });

  const [inputIsBlur, setInputIsBlur] = useState<{
    [K in keyof SignUpInput]: boolean;
  }>({
    email: false,
    email2: false,
    password: false,
    password2: false,
  });

  const [inputIsValid, setInputIsValid] = useState<{
    [K in keyof SignUpInput]: boolean;
  }>({
    email: false,
    email2: false,
    password: false,
    password2: false,
  });

  const [inputMessage, setInputMessage] = useState<SignUpInput>({
    email: '',
    email2: '',
    password: '',
    password2: '',
  });

  const [isAblueToSubmit, setIsAbleToSubmit] = useState<boolean>(false);

  useEffect(() => {
    const isOkay =
      inputIsValid.email &&
      inputIsValid.email2 &&
      inputIsValid.password &&
      inputIsValid.password2;

    setIsAbleToSubmit(isOkay);
  }, [
    inputIsValid.email,
    inputIsValid.email2,
    inputIsValid.password,
    inputIsValid.password2,
  ]);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof SignUpInput;
    const value = e.target.value.trim();

    setInputValue((prev) => {
      return { ...prev, [inputName]: value };
    });

    let isValid: boolean;
    switch (inputName) {
      case 'email':
        isValid = validateSignUp.email(value);
        break;
      case 'email2':
        isValid = validateSignUp.email(value) && value === inputValue.email;
        break;
      case 'password':
        isValid = validateSignUp.password(value);
        break;
      case 'password2':
        isValid =
          validateSignUp.password(value) && value === inputValue.password;
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
    const inputName = e.target.name as keyof SignUpInput;

    setInputIsBlur((prev) => {
      return { ...prev, [inputName]: true };
    });

    setInputMessage((prev) => {
      const isEmpty = e.target.value.trim() === '';

      return {
        ...prev,
        [inputName]: isEmpty
          ? EMPTY_MESSAGE[inputName]
          : inputIsValid[inputName]
          ? 'okay'
          : ERROR_MESSAGE[inputName],
      };
    });
  };

  const requestSignUp = (e: FormEvent<HTMLFormElement>) => {
    console.log('here');
    e.preventDefault();
    if (!isAblueToSubmit) return;

    const { email, password } = inputValue;

    axios
      .create({ baseURL: import.meta.env.VITE_BASE_URL })
      .post('/auth/signup', {
        email,
        password,
      });
  };

  const ERROR_MESSAGE = {
    email: '올바른 이메일 형식이 아닙니다.',
    email2: '올바른 이메일 형식이 아니거나 일치하지 않습니다.',
    password: '올바른 비밀번호 형식이 아닙니다.',
    password2: '올바른 비밀번호 형식이 아니거나가 일치하지 않습니다.',
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
      <Form onSubmit={requestSignUp}>
        <InputOfForm
          name="email"
          value={inputValue.email}
          message={inputMessage.email}
          placeholder="이메일"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <InputOfForm
          name="email2"
          value={inputValue.email2}
          message={inputMessage.email2}
          placeholder="이메일 확인"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <InputOfForm
          type="password"
          name="password"
          value={inputValue.password}
          message={inputMessage.password}
          placeholder="비밀번호"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
        />
        <InputOfForm
          type="password"
          name="password2"
          value={inputValue.password2}
          message={inputMessage.password2}
          placeholder="비밀번호 확인"
          onChange={changeInputValue}
          onBlur={changeInputIsBlur}
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
