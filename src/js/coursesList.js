const coursesContainer = document.getElementById('courses-list');
const HTMLCollectionCourses = document.getElementsByClassName('course-container');
const arrayCourses = []; //initializing array

//transfer all HTMLcollectionCourses content to arrayCourses
for(let i = 0; i < HTMLCollectionCourses.length; i++) {
    arrayCourses.unshift(HTMLCollectionCourses[i])
}

createDivCourses(3, 5);

function createDivCourses(firstDiv, secondDiv) {
    let counter = 0;
    
    
    for(i = 1; i < arrayCourses.length; i++) {
        counter++

        if(counter === firstDiv ) {

            let firstRow = document.createElement('div'); 
            firstRow.classList.add('course-row') 
            firstRow.append(arrayCourses[i-2], arrayCourses[i-1], arrayCourses[i]); 
            coursesContainer.insertAdjacentElement("afterbegin", firstRow);

        } else if (counter === secondDiv) {

            let firstRow = document.createElement('div');
            firstRow.classList.add('course-row')
            firstRow.append(arrayCourses[i-1], arrayCourses[i]);
            coursesContainer.insertAdjacentElement("afterbegin", firstRow);
            
            counter = 0;

        }
    
    }
   
}