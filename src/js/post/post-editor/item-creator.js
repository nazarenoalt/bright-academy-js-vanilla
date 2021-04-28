const levelSelector = document.querySelector('#difficulty');
const itemBackground = document.querySelector('#item-background');

const changeDifficult = () => {
   switch(levelSelector.value) {
        case "B":
            itemBackground.className = 'item-background easy';
            break;
        case "I":
            itemBackground.className = 'item-background moderate';
            break;
        case "A":
            itemBackground.className = 'item-background difficult';
            break;
        }
}

levelSelector.addEventListener('change', changeDifficult);