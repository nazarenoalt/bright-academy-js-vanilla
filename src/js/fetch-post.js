
const postFormulary = document.querySelector('#post_container');
const URL = 'http://gonza56d.pythonanywhere.com/api/posts/:id';
const post_id = 1;
const AUTH_TOKEN = 'e0017f5279c80fcc822c46947cf8813ab0e05a9d'

//post data
    fetch(URL.replace(':id', post_id), {
        headers: {'Authorization': `Token ${AUTH_TOKEN}`} 
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            post_title.innerHTML = data.title;
            post_content.innerHTML = data.content;
            let date = new Date(data.created);
            post_date.innerHTML = date;
        })
        .catch(err => console.error(err));