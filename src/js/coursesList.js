const coursesContainer = document.getElementById('courses-list');
const HTMLCollectionCourses = document.getElementsByClassName('course-container');
const arrayCourses = []; //initializing array
const mediaQuery = window.matchMedia( 'only screen (max-width: 500px)' );
//transfer all HTMLcollectionCourses content to arrayCourses
for(let i = 0; i < HTMLCollectionCourses.length; i++) {
    arrayCourses.unshift(HTMLCollectionCourses[i])
}

createDivCourses(3, 5);
if(mediaQuery.matches) {

}
function createDivCourses(firstDiv, secondDiv) {
    let counter = 0;
    
    for(i = 1; i < arrayCourses.length; i++) {
        counter++

        if(counter === firstDiv ) {

            let row = document.createElement('div'); 
            row.classList.add('course-row') 
            
            row.append(arrayCourses[i-2], arrayCourses[i-1], arrayCourses[i]); 
            coursesContainer.insertAdjacentElement("afterbegin", row);

            if(mediaQuery.matches) {
                row.classList.add('wrapped') 
                arrayCourses[i-2].classList.add('order-1');
            }

        } else if (counter === secondDiv) {

            let row = document.createElement('div');
            row.classList.add('course-row')
            row.append(arrayCourses[i-1], arrayCourses[i]);
            coursesContainer.insertAdjacentElement("afterbegin", row);
            
            counter = 0;

        }
    
    }
   
}