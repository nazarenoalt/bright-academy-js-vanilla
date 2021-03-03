const newContainer = document.getElementById('new-container');

let divs = document.querySelectorAll('.course-container');
let nodos = [];
let counter = 0;

for (let i = 0; i < divs.length; i++) {
    counter++;

    if(counter === 2) {

        let nodo = document.createElement('div');
        nodo.classList.add('wrapped') 

        nodo.append(divs[i-1], divs[i])
        nodos.push(nodo);
        
    } else if(counter === 5) {

        let nodo = document.createElement('div');
        nodo.classList.add('wrapped') 

        nodo.append(divs[i-2], divs[i-1], divs[i])
        nodos.push(nodo)
        counter = 0;

   }
}

newContainer.append(...nodos);