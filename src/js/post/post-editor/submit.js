import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from "../../utils/constants.js";
import { EMOJI_ID } from './emoji-box.js';

const POST_API_URL = `${API_URL}posts/`;

const POST_FORMULARY = document.querySelector('#post-formulary');
const POST_TITLE = document.querySelector('#post-title');
const POST_CONTENT = document.querySelector('.ql-editor');
const POST_DIFFICULTY = document.querySelector('#difficulty');

const formData = new FormData();

const sendPost = (ev) => {

  ev.preventDefault()
  formData.append('title', POST_TITLE.value)
  formData.append('content', POST_CONTENT.innerHTML)
  formData.append('difficulty', POST_DIFFICULTY.value)
  formData.append('emoji_id', EMOJI_ID)

      fetch(POST_API_URL, {
          method : 'POST',
          body: formData,
          headers : {
              Authorization : `Token ${AUTH_TOKEN}`,
          }
      }).then(resp => resp.json())
      .then(data => document.location = `${ORIGIN_ROOT}/courses.html?id=${data.id}`)
      .catch(err => console.error(err))

}

POST_FORMULARY.addEventListener('submit', sendPost);