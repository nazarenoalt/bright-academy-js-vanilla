import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from "../utils/constants.js";
import { warningText } from '../utils/warning-text.js';

let toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote'],
  
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['image', 'video'],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

  let options = {
    theme: 'snow',
     modules: {
        toolbar: toolbarOptions
     },
   
}

let editor = new Quill('#editor_container', options);
let editor_content = document.querySelector('.ql-editor').outerHTML;

const POST_API_URL = `${API_URL}posts/`
const POST_TITLE = document.querySelector('#post-title');
const POST_CONTENT = document.querySelector('.ql-editor');
const POST_FORMULARY = document.querySelector('#post-formulary');
const POST_DIFFICULTY = document.querySelector('#difficulty');
const SUBMIT_BUTTON = document.querySelector('#submit-button');
const CLOSE_BUTTON = document.querySelector('#close-button');
const PREVIEW_BUTTON = document.querySelector('#preview-button');
const PREVIEW_CONTAINER = document.querySelector('#preview-container')
const PREVIEW_BACKGROUND = document.querySelector('#preview_background');
const formData = new FormData();

//Preview Buttons
const openPreview = () => {
    PREVIEW_CONTAINER.style.display = 'flex';
    PREVIEW_BACKGROUND.style.display= 'block'
}

CLOSE_BUTTON.addEventListener('click', (ev) => {
    ev.currentTarget.parentNode.style.display = "none";
    PREVIEW_BACKGROUND.style.display = "none";
});

PREVIEW_BUTTON.addEventListener('click', openPreview);
//Submitting post
POST_FORMULARY.addEventListener('submit', (ev) => {
    ev.preventDefault()
    formData.append('title', POST_TITLE.value)
    formData.append('content', POST_CONTENT.innerHTML)
    formData.append('difficulty', POST_DIFFICULTY.value)

    if(POST_CONTENT.textContent.length >= 500) {
        fetch(POST_API_URL, {
            method : 'POST',
            body: formData,
            headers : {
                Authorization : `Token ${AUTH_TOKEN}`,
            }
        }).then(resp => resp.json())
        .then(data => document.location = `${ORIGIN_ROOT}/courses.html?id=${data.id}`)
        .catch(err => console.error(err))
    } else {
        warningText('El post debe tener al menos 500 caracteres', PREVIEW_BUTTON);
    }
})