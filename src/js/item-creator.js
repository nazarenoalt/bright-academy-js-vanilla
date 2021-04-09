const levelSelector = document.querySelector('#level-selector');
const itemBackground = document.querySelector('#item-background');

const changeDifficult = () => {
   switch(levelSelector.value) {
        case "B":
            itemBackground.className = 'easy';
            break;
        case "I":
            itemBackground.className = 'moderate';
            break;
        case "A":
            itemBackground.className = 'difficult';
            break;
        }
} 

levelSelector.addEventListener('onchange', changeDifficult);