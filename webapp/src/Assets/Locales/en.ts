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
  }
};
export default en;