import { API_URL } from "./constants.js";

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

let editor = new Quill('#editor-container', options);
var editor_content = document.querySelector('.ql-editor').outerHTML;

//SENDING POST BBY FETCH

const POST_API_URL = `${API_URL}posts/`
const AUTH = '2587b85d61320f51e6eecd6b4ee0e88b6bf390a0';
const POST_TITLE = document.querySelector('#post-title');
const POST_CONTENT = document.querySelector('#editor-container');
const SUBMIT_BUTTON = document.querySelector('#submit-button');

SUBMIT_BUTTON.addEventListener('click', () => {
  console.log(POST_TITLE.value)
  console.log(editor_content)
})

fetch(POST_API_URL, {
  method : 'POST',
  body: {
    title : `primer post`,
    content : `este es un post de prueba`,
    difficulty : `B`
  },
  headers : {
    Authorization : `Token ${AUTH}`,
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
