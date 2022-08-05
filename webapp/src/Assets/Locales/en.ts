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
  add: "Add",
  playbackPanel: 'Playback panel',
  lists: 'Lists',
  createList: 'Create new list',
  create: 'Create',
  dontPlaylists: "You don't have any playlists yet",
  spotifyInfo: "In order to provide you with musical content we have obtained the data from Spotify Api Developers. You can continue by pressing the button below.",
  confirmDelete: 'Are you sure you want to delete this list?',
  edit: 'Edit',
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
    name: "Name"
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
    confPassword: 'Password and confirmation do not match',
    saveList: 'An error occurred while saving your list, please try again',
    removeList: 'An error occurred while deleting your list, please try again',
    updateList: 'There was an error updating your list, please try again'
  },
  alerts:{
    userNotFound: 'User not found',
    incorrectPassword: 'Incorrect password',
    successLogin: "Login success",
    emailAlreadyExist: "The email entered is already being used",
    successRegister: "Successful registration",
    newList: 'New list added successfully',
    removeList: 'List removed successfully',
    updateList: 'List updated successfully'
  },
  wait: 'Please wait ...',
  accessDenied: 'Access denied',
  accessDeniedInfo: 'Please log in again'
};
export default en;