const newContainer = document.getElementById('new-container');

let item = document.querySelectorAll('.course-container');
console.log(item)
let nodos = [];
let counter = 0;

for (let i = 0; i < item.length; i++) {
    counter++;
    console.log(item[i])

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