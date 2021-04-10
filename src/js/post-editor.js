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

//let editor = new Quill('#editor-container', options);
//var editor_content = document.querySelector('.ql-editor').outerHTML;

//SENDING POST BBY FETCH

const API_URL = 'http://brightacademy.pythonanywhere.com/api/posts/';
const AUTH = '2587b85d61320f51e6eecd6b4ee0e88b6bf390a0';
const POST_FORM = document.querySelector('#post-formulary');
const f = {

}
document.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(POST_FORM)

    fetch(API_URL, {'method': 'post',
                        'body': {
                            'title': 'Title of the new Post',
                            'difficulty': 'A',
                            'content': 'Text data of the new Post',
                        },
                        'headers': {
                            'Authorization' : `Token ${AUTH}`,
                            'Content-Type': "application/json",
                        }})
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw "error en la llamada Ajax";
            }
        })
})


/*
FORM.addEventListener('submit', () => {
    fetch(URL, {
        method : 'POST',
        body: {
            'title' : `${titleC}`,
            'content' : `${contenido}`,
            'difficulty' : `${POST_DIFFICULTY}`,
        },
        headers : {

        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            return data
        })
        .then(data => console.log('VEAMOS'))
        .catch(err => {
            console.error(err)

        })
})
*/
