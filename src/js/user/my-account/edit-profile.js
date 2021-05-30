import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from '../../utils/constants.js';
import { getCookies } from '../../utils/cookies.js';

const form = document.querySelector('#edit-profile_form');
const username = getCookies().username;
const URL = `${API_URL}profiles/${username}/`;

form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  const formData = new FormData(form);
  
  fetch(URL, {
    method: 'patch',
    body: formData,
    headers: {
      Authorization: `Token ${AUTH_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
    response.json()
    document.location = `${ORIGIN_ROOT}/my-account.html`
    })
    .then(data => console.log(data))
    .catch(err => console.error(err))
  
})