import globals from './globals';

const es: { [key: string]: string | { [key: string]: string } | any } = {
  ...globals,
  en: 'Ingles',
  es: 'Espanol',
  language: 'Idioma',
  theme: 'Tema',
  title: {
    signin: "Iniciar sesión",
    signup: "Regístrate"
  },
  labels: {
    email: 'Correo electrónico',
    confEmail: 'Confirmar correo electrónico',
    password: 'Contraseña',
    confPassword: 'Confirmar contraseña',
    notHaveAccount: 'Aún no tienes una cuenta ?',
    notRememberPassword: 'No recuerdas tu contraseña ?',
    recover: "Recuperar",
    alreadyAccount: "Ya tienes una cuenta ?",
  },
  buttons: {
    signin: "Iniciar sesión",
    signup: "Regístrate"
  },
  errors:{
    required: 'Entrada requerida! *',
    email: 'Correo electrónico invalido',
    confEmail: 'El Correo electrónico y la confirmación no coinciden',
    password: 'La contraseña debe tener como minimo 8 caracteres y debe contener al menos una mayúscula , una minúscula y un carácter especial(simbolo)',
    confPassword: 'La contraseña y la confirmación no coinciden'
  }
};
export default es;