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

const URL = 'http://brightacademy.pythonanywhere.com/api/posts/'
const AUTH = '2587b85d61320f51e6eecd6b4ee0e88b6bf390a0';
const POST_TITLE = document.querySelector('#post-title').value;
const POST_CONTENT = document.querySelector('.ql-editor');
const POST_DIFFICULTY = document.querySelector('#level-selector').value;
const SUBMIT = document.querySelector('#post-formulary');

SUBMIT.addEventListener('submit', () => {
    debugger
    fetch(URL, {
        method : 'POST',
        body: {
            'title' : `${POST_TITLE}`,
            'content' : `${POST_CONTENT.innerHTML}`,
            'difficulty' : `${POST_DIFFICULTY}`,
        },
        headers : {
            Authorization : `Token ${AUTH}`,
            'Content-Type': "application/json",
        }
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error(err)

        })
})
/*
f
 */