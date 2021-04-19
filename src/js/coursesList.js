import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from "./constants.js";

function fetchPosts() {
    const URL = `${API_URL}posts/`;
    const container = document.createElement('div');
    container.classList = 'courses-list';

    container.setAttribute('id','new-container')
    fetch(URL, {method:"GET", headers: {Authorization: `Token ${AUTH_TOKEN()}`}})
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => b.id - a.id);
            console.log(data);
            return data;
        })
        .then(data => {
            data.forEach(element => {
                const component = document.createElement('course-item');
                component.setAttribute('class', 'course-container')
                component.setAttribute('emoji', '006-shooting-star.svg')
                component.setAttribute('coursetitle', `${element.title}`)
                component.setAttribute('date',  `${element.created}`)
                component.setAttribute('difficulty',  `${element.difficulty}`)
                component.setAttribute('url', `${ORIGIN_ROOT}/courses.html?id=${element.id}`)
                container.append(component)
            });
            document.querySelector('.main-content').append(container);
            orderPosts();
        })
        .catch(err => console.error(err))
}

function orderPosts() {
    const newContainer = document.getElementById('new-container');
    let item = document.querySelectorAll('course-item');
    let nodos = [];
    let counter = 0;

    for (let i = 0; i < item.length; i++) {
        counter++;
        if(counter === 2) {
    
            let nodo = document.createElement('div');
            nodo.classList.add('wrapped') 
    
            nodo.append(item[i-1], item[i])
            nodos.push(nodo);
            
        } else if(counter === 5) {
    
            let nodo = document.createElement('div');
            nodo.classList.add('wrapped') 
    
            nodo.append(item[i-2], item[i-1], item[i])
            nodos.push(nodo)
            counter = 0;
    
       }
    }
    newContainer.append(...nodos);
}

fetchPosts();

