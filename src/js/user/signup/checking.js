import { addWarningText, warningTextExists, deleteWarningText } from "../../utils/warning-text.js"

export const checkUserData = (data) => {
  const warn_place = document.querySelector('#submit');
  if(data.email) {
    addWarningText('El email es inválido o ya está registrado', warn_place, 'email');
  } else if(warningTextExists('email')) {
      deleteWarningText('email')
  }
  if(data.username) {
    addWarningText('El nombre de usuario ya existe o es invalido', warn_place, 'username');
  } else if (warningTextExists('username')) {
      deleteWarningText('username')
  }
}

export const checkLength = (username,password, functionCaseTrue) => {
  const warn_place = document.querySelector('#submit');

  if(username.value.length < 8 || password.value.length < 8) {
    addWarningText('El nombre de usuario y contraseña deben tener al menos 8 caracteres', warn_place, 'user-password_length');
  } else {
    if(warningTextExists('user-password_length')) {
      deleteWarningText('user-password_length')
    }
    return functionCaseTrue();
  }
}