const levelSelector = document.querySelector('#level-selector');
const itemBackground = document.querySelector('#item-background');

const changeDifficult = () => {
   switch(levelSelector.value) {
        case "1":
            itemBackground.className = 'easy';
            break;
        case "2":
            itemBackground.className = 'moderate';
            break;
        case "3":
            itemBackground.className = 'difficult';
            break;
        }
} 

levelSelector.addEventListener('onchange', changeDifficult);