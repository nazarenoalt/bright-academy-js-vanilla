import { warningText } from '../../utils/warning-text.js';

const PREVIEW_CONTAINER = document.querySelector('#preview-container')
const PREVIEW_BACKGROUND = document.querySelector('#preview_background');
const CLOSE_BUTTON = document.querySelector('#close-button');
const PREVIEW_BUTTON = document.querySelector('#preview-button');
const preview_title = document.querySelector('#preview-title');
const preview_content = document.querySelector('#preview-content');

const POST_CONTENT = document.querySelector('.ql-editor');
const POST_TITLE = document.querySelector('#post-title');
const SUBMIT_BUTTON = document.querySelector('#submit-button');

const openPreview = () => {

  preview_title.innerHTML = POST_TITLE.value;
  preview_content.innerHTML = POST_CONTENT.innerHTML;
  PREVIEW_CONTAINER.style.display = 'flex';
  PREVIEW_BACKGROUND.style.display= 'block'

  setTimeout(() => SUBMIT_BUTTON.removeAttribute('disabled'), 5000);

}

CLOSE_BUTTON.addEventListener('click', (ev) => {

  ev.currentTarget.parentNode.style.display = "none";
  PREVIEW_BACKGROUND.style.display = "none";

});

const checkConditions = () => {

  if(POST_CONTENT.textContent.length >= 140 && POST_TITLE.value.length > 4) {
    PREVIEW_BUTTON.removeEventListener('click', warningText);
    PREVIEW_BUTTON.addEventListener('click', openPreview);
  } else {
    PREVIEW_BUTTON.removeEventListener('click', openPreview);
    PREVIEW_BUTTON.addEventListener('click', () => warningText('El post debe tener al menos 140 caracteres en el contenido y 4 en el título', PREVIEW_BUTTON))
  }

}

//Event listeners to check if the post is ready to a preview
POST_CONTENT.addEventListener('keydown', checkConditions)
POST_TITLE.addEventListener('keydown', checkConditions)
PREVIEW_BUTTON.addEventListener('click', () => warningText('El post debe tener al menos 140 caracteres en el contenido y 4 en el título', PREVIEW_BUTTON))
