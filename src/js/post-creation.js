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

//SENDING POST BBY FETCH

const URL = 'http://gonza56d.pythonanywhere.com/api/posts/'
const AUTH = '1488f97fb28017654e6d4dd5210738b859784d13';
const TITLE = 'hola';
const CONTENT = 'QUE ONDA LOCO';
const BOYD =
fetch(URL, { 
  method : 'POST',
  body: {
    title : `${TITLE}`,
    content : `${CONTENT}`,
  },
  headers : {
    Authorization : `Token ${AUTH}`,
    Type: 'json'
  }    
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
