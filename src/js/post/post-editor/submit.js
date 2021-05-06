import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from "../../utils/constants.js";
import { EMOJI_ID } from './emoji-box.js';
import { getGET } from '../../utils/root.js'
import { fetch_post } from '../fetch-post.js'
let POST_API_URL = `${API_URL}posts/`;

const POST_FORMULARY = document.querySelector('#post-formulary');
const POST_TITLE = document.querySelector('#post-title');
const POST_CONTENT = document.querySelector('.ql-editor');
const POST_DIFFICULTY = document.querySelector('#difficulty');
const HTML_TAB_TITLE= document.querySelector('#html_tab_title')
const ITEM_EMOJI = document.querySelector('.item-emoji')
const typeMethod = getGET().method || 'post';
const DELETE_POST_BUTTON = document.querySelector('#open_deleting_menu');

//fetching post
if(typeMethod === 'put') {
    POST_API_URL += `${getGET().id}/`
    DELETE_POST_BUTTON.classList.remove('hidden');
    fetch_post(POST_TITLE,
            POST_CONTENT,
            undefined,
            HTML_TAB_TITLE,
            POST_DIFFICULTY,
            ITEM_EMOJI
            )
}

//preparing to send post
const formData = new FormData();

const sendPost = (ev) => {

  console.log(typeMethod);
  ev.preventDefault()
  formData.append('title', POST_TITLE.value)
  formData.append('content', POST_CONTENT.innerHTML)
  formData.append('difficulty', POST_DIFFICULTY.value)
  formData.append('emoji_id', EMOJI_ID)

      fetch(POST_API_URL, {
          method : typeMethod,
          body: formData,
          headers : {
              Authorization : `Token ${AUTH_TOKEN}`,
          }
      }).then(resp => resp.json())
      .then(data => document.location = `${ORIGIN_ROOT}/courses.html?id=${data.id}`)
      .catch(err => console.error(err))

}

POST_FORMULARY.addEventListener('submit', sendPost);