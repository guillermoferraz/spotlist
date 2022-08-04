import globals from './globals';

const en: { [key: string]: string | { [key: string]: string } | any } = {
  ...globals,
  en: 'Enlgish',
  es: 'Spanish',
  description: 'The place for your music',
  language: 'Language',
  theme: 'Theme',
  logout: 'Logout',
  search: "Search",
  playbackPanel: 'Playback panel',
  spotifyInfo: "In order to provide you with musical content we have obtained the data from Spotify Api Developers. You can continue by pressing the button below.",
  
  title: {
    signin: "Sign in",
    signup: "Sign up",
    home: 'Home'
  },
  labels: {
    email: 'Email',
    confEmail: 'Confirm email',
    password: 'Password',
    confPassword: 'Confirm password',
    notHaveAccount: 'Do not you have an account yet ?',
    notRememberPassword: 'Do not you remember your password ?',
    recover: "Recover",
    alreadyAccount: "Do you already have an account ?",
  },
  buttons: {
    signin: "Sign in",
    signup: "Sign up",
    getInto: "Get into"
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
  wait: 'Please wait ...',
  accessDenied: 'Access denied',
  accessDeniedInfo: 'Please log in again'
};
export default en;