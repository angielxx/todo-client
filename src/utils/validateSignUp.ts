import { SignUpInput } from '@/types/signUp';

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const validateEmail = (email: string) => {
  if (email.trim() === '') return false;
  return emailPattern.test(email);
};

const validateEmail2 = (email2: string, email: string) => {
  return validateEmail(email2) && email === email2;
};

const validatePassword = (password: string) => {
  return passwordPattern.test(password);
};

const validatePassword2 = (password2: string, password: string) => {
  return validatePassword(password2) && password === password2;
};

export const validateSignUp: {
  [K in keyof SignUpInput]: ValidatorFunctions[K];
} = {
  email: validateEmail,
  email2: validateEmail2,
  password: validatePassword,
  password2: validatePassword2,
};

type ValidatorFunctions = {
  email: (email: string) => boolean;
  email2: (email2: string, email: string) => boolean;
  password: (password: string) => boolean;
  password2: (password2: string, password: string) => boolean;
};
