import { API_URL, AUTH_TOKEN } from './constants.js';

const generateUsersList = () => {
  const URL = `${API_URL}users/`;

  fetch(URL, {
    headers: {
      Authorization: `Token ${AUTH_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));

}

export default generateUsersList;