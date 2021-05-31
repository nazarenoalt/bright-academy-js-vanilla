import { API_URL, AUTH_TOKEN } from '../utils/constants.js';

const generateUsersList = () => {
  const URL = `${API_URL}users/`;

  fetch(URL, {
    headers: {
      Authorization: `Token ${AUTH_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => {
      data.map(user => console.log(user))
    })
}