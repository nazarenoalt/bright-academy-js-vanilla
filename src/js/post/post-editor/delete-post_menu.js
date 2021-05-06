import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from '../../utils/constants.js';
import { getGET } from '../../utils/root.js'

//Taking elements
const open_button = document.querySelector('#open_deleting_menu');
const cancel_button = document.querySelector('#cancel_button')
const menu = document.querySelector('#delete_post_formulary')
const preview_background = document.querySelector('#preview_background');
const delete_button = document.querySelector('#delete_button');

//Variables
const ID = getGET().id;
const URL = `${API_URL}posts/${ID}`;


//Event Listeners
open_button.addEventListener('click', () => {

  menu.classList.remove('hidden');
  preview_background.style.display = 'block'
  //Enabling delete button
  const enableDeleteButton = setTimeout(() => delete_button.removeAttribute('disabled'), 1000);

  cancel_button.addEventListener('click', () => {
    menu.classList.add('hidden');
    preview_background.style.display = 'none';
    clearTimeout(enableDeleteButton)
    delete_button.setAttribute('disabled', '');
  });

})

menu.addEventListener('submit', (e) => {

  e.preventDefault();
  fetch(URL, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${AUTH_TOKEN}`,
  }
  })
  .then(() => {
    document.location = `${ORIGIN_ROOT}/post-deleted.html` 
  })
  .catch(err => {
    console.error(err);
  })

})


