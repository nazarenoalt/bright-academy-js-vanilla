import { API_URL } from "../../utils/constants.js";
import { addWarningText, warningTextExists, deleteWarningText } from "../../utils/warning-text.js"
const URL = `${API_URL}users/:username`

export const checkUserData = (data) => {
  const warn_place = document.querySelector('#submit');
  if(data.email) {
    addWarningText('El email es inválido o ya está registrado', warn_place, 'email');
  } else {
    if(warningTextExists('email')) {
      deleteWarningText('email')
    }
  }
  if(data.username) {
    addWarningText('El nombre de usuario ya existe o es invalido', warn_place, 'username');
  } else {
    if(warningTextExists('username')) {
      deleteWarningText('username')
    }
  }
}

