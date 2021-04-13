const levelSelector = document.querySelector('#difficulty');
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

levelSelector.addEventListener('change', changeDifficult);