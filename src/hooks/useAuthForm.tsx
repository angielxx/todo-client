import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';

import { SignUpInput } from '@/types/signUp';
import { validateSignUp } from '@/utils/validateSignUp';
import { InputVariantsType } from '@/components';

const ERROR_MESSAGE = {
  email: '올바른 이메일 형식이 아닙니다.',
  email2: '올바른 이메일 형식이 아니거나 일치하지 않습니다.',
  password: '올바른 비밀번호 형식이 아닙니다.',
  password2: '올바른 비밀번호 형식이 아니거나 일치하지 않습니다.',
};

const EMPTY_MESSAGE = {
  email: '이메일을 입력해주세요.',
  email2: '이메일을 한 번 더 입력해주세요.',
  password: '비밀번호를 입력해주세요.',
  password2: '비밀번호를 한 번 더 입력해주세요.',
};

export const useAuthForm = () => {
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

  const [inputVariants, setInputVariants] = useState<{
    [K in keyof SignUpInput]: InputVariantsType;
  }>({
    email: 'default',
    email2: 'default',
    password: 'default',
    password2: 'default',
  });

  const [isAblueToSignUp, setIsAbleToSignUp] = useState<boolean>(false);
  const [isAblueToSignIn, setIsAbleToSignIn] = useState<boolean>(false);

  inputIsBlur; // 임시방편

  useEffect(() => {
    setIsAbleToSignUp(
      inputIsValid.email &&
        inputIsValid.email2 &&
        inputIsValid.password &&
        inputIsValid.password2
    );
    setIsAbleToSignIn(inputIsValid.email && inputIsValid.password);
  }, [
    inputIsValid.email,
    inputIsValid.email2,
    inputIsValid.password,
    inputIsValid.password2,
  ]);

  const chooseInputMessage = (
    inputName: keyof SignUpInput,
    isValid: boolean,
    isEmpty: boolean
  ) => {
    setInputMessage((prev) => {
      return {
        ...prev,
        [inputName]: isValid
          ? 'okay'
          : isEmpty
          ? EMPTY_MESSAGE[inputName]
          : ERROR_MESSAGE[inputName],
      };
    });

    setInputVariants((prev) => {
      return {
        ...prev,
        [inputName]: isValid ? 'valid' : 'inValid',
      };
    });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof SignUpInput;
    const value = e.target.value.trim();
    const targetName = inputName === 'email2' ? 'email' : 'password';
    const isValid = validateSignUp[inputName](value, inputValue[targetName]);

    setInputValue((prev) => {
      return { ...prev, [inputName]: value };
    });

    setInputIsValid((prev) => {
      return { ...prev, [inputName]: isValid };
    });

    chooseInputMessage(inputName, isValid, !value);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof SignUpInput;
    const value = e.target.value.trim();

    setInputIsBlur((prev) => {
      return { ...prev, [inputName]: true };
    });

    chooseInputMessage(inputName, inputIsValid[inputName], !value);
  };

  return {
    inputValue,
    inputMessage,
    isAblueToSignUp,
    isAblueToSignIn,
    inputVariants,
    onChangeHandler,
    onBlurHandler,
  };
};
