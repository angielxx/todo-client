import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { InputOfForm } from '@/components/InputOfForm';
import { SignupInput } from '@/types/auth';

export const SignUp = () => {
  const [inputValue, setInputValue] = useState<SignupInput>({
    email: '',
    email2: '',
    password: '',
    password2: '',
  });

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <Form>
        <InputOfForm
          label="이메일"
          message=""
          placeholder="이메일을 입력해주세요."
          onChange={changeInputValue}
        />
        <InputOfForm
          label="이메일 확인"
          message=""
          placeholder="이메일을 입력해주세요."
          onChange={changeInputValue}
        />
        <InputOfForm
          label="비밀번호"
          message=""
          placeholder="이메일을 입력해주세요."
          onChange={changeInputValue}
        />
        <InputOfForm
          label="비밀번호 확인"
          message=""
          placeholder="이메일을 입력해주세요."
          onChange={changeInputValue}
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
