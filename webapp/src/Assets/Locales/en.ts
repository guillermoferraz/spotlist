import globals from './globals';

const en: { [key: string]: string | { [key: string]: string } | any } = {
  ...globals,
  en: 'Enlgish',
  es: 'Spanish',
  language: 'Language',
  theme: 'Theme',
  title: {
    signin: "Sign in",
    signup: "Sign up"
  },
  labels: {
    email: 'Email',
    confEmail: 'Confirm email',
    password: 'Password',
    confPassword: 'Confirm password',
    notHaveAccount: 'Do not you have an account yet ?',
    notRememberPassword: 'Do not you remember your password ?',
    recover: "Recover",
    alreadyAccount: "Do you already have an account ?"
  },
  buttons: {
    signin: "Sign in",
    signup: "Sign up"
  },
  errors:{
    required: 'Input required! *',
    email: 'Invalid email',
    confEmail: 'Email and confirmation do not match',
    password: 'The password must have at least 8 characters and must contain at least one uppercase, one lowercase and one special character (symbol)',
    confPassword: 'Password and confirmation do not match'
  },
  alerts:{
    userNotFound: 'User not found',
    incorrectPassword: 'Incorrect password',
    successLogin: "Login success",
    emailAlreadyExist: "The email entered is already being used",
    successRegister: "Successful registration"
  },
  wait: 'Please wait ...'
};
export default en;