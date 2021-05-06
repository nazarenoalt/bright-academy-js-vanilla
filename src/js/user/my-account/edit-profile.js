import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from '../../utils/constants.js';
import { getCookies } from '../../utils/cookies.js';

const form = document.querySelector('#edit-profile_form');
const submit_button = document.querySelector('#submit_button');
const username = getCookies().username;
const URL = `${API_URL}users/${username}`;

console.log(form);


form.addEventListener('submit', (e) => {
  console.log('a')
  e.preventDefault;
  const formData = new FormData(form);
  fetch(URL, {
    method: 'patch',
    body: formData,
    Authorization: `Token ${AUTH_TOKEN}`
  })
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
  
})