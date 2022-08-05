import globals from './globals';

const es: { [key: string]: string | { [key: string]: string } | any } = {
  ...globals,
  en: 'Ingles',
  es: 'Espanol',
  description: 'El sitio para tu música',
  spotifyInfo: "Para proporcionarle contenido musical, hemos obtenido los datos de Spotify Api Developers. Puede continuar presionando el botón de abajo.",
  language: 'Idioma',
  theme: 'Tema',
  logout: 'Cerrar sesión',
  search: "Buscar",
  add: "Agregar",
  lists: 'Listas',
  createList: 'Crear nueva lista',
  create: 'Crear',
  dontPlaylists: "Aún no tienes ninguna lista de reproducción",
  playbackPanel: 'Panel de reproducción',
  confirmDelete: '¿Está seguro de que desea eliminar esta lista?',
  title: {
    signin: "Iniciar sesión",
    signup: "Regístrate",
    home: 'Inicio'
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
    name: "Nombre"
  },
  buttons: {
    signin: "Iniciar sesión",
    signup: "Regístrate",
    getInto: "Ingresar"
  },
  errors:{
    required: 'Entrada requerida! *',
    email: 'Correo electrónico invalido',
    confEmail: 'El Correo electrónico y la confirmación no coinciden',
    password: 'La contraseña debe tener como minimo 8 caracteres y debe contener al menos una mayúscula , una minúscula y un carácter especial(simbolo)',
    confPassword: 'La contraseña y la confirmación no coinciden',
    saveList: 'Ah ocurrido un error al guardar su lista, por favor vuelva  a intentarlo',
    removeList: 'Ocurrió un error al eliminar su lista, intente nuevamente'
  },
  alerts:{
    userNotFound: 'Usuario no encontrado',
    incorrectPassword: 'Contraseña incorrecta',
    successLogin: "Inicio de sesion exitoso",
    emailAlreadyExist: "El correo electrónico ingresado ya esta siendo utilizado",
    successRegister: "Registro exitoso",
    newList: 'Nueva lista agregada con exito',
    removeList: 'Lista eliminada correctamente'
  },
  wait: 'Por favor espere ...',
  accessDenied: 'Acceso denegado',
  accessDeniedInfo: 'Por favor vuelva a iniciar sesión'
};
export default es;