import { API_URL, AUTH_TOKEN } from "./constants.js";
import { ORIGIN_ROOT } from "./root.js";

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
const POST_TITLE = document.querySelector('#post-title');
const POST_CONTENT = document.querySelector('.ql-editor');
const POST_FORMULARY = document.querySelector('#post-formulary');
const POST_DIFFICULTY = document.querySelector('#difficulty')
const POST_ANCHOR = document.querySelector("#post-anchor")
const formData = new FormData();

document.addEventListener('click', () => {


})

console.log(formData)
POST_FORMULARY.addEventListener('submit', (ev) => {
    ev.preventDefault()
    formData.append('title', POST_TITLE.value)
    formData.append('content', POST_CONTENT.innerHTML)
    formData.append('difficulty', POST_DIFFICULTY.value)

    fetch(POST_API_URL, {
        method : 'POST',
        body: formData,
        headers : {
            Authorization : `Token ${AUTH_TOKEN}`,
        }
    }).then(resp => window.location = `${ORIGIN_ROOT}/success.html`)
    .catch(err => console.error(err))

})

