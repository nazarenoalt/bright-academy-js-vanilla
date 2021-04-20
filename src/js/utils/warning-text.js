let warns = document.querySelectorAll('.warning-text');

const createElement = (msg, plc) => {

  const p = document.createElement('p');
  p.textContent = `* ${msg}`;
  p.classList.add('warning-text');
  plc.insertAdjacentElement('beforebegin', p);

}

const lookingIfWarnExists = (msg) => {
  let hasTheWarn = false;
  warns.forEach(warn => {
    if (warn.textContent === `* ${msg}`) hasTheWarn = true;
  })
  return hasTheWarn;
}

//Creating Warning Text
export const warningText = (message, place) => {

  warns = document.querySelectorAll('.warning-text');
  
  if(warns.length > 0) {
    if(lookingIfWarnExists(message) === false) createElement(message, place);
  } else {
    createElement(message, place)
  }

}

//Deleting Warning Text
export const deletingWarningText = (message, condition) => {
  warns.forEach(warn => {
    if(warn.textContent === `* ${message}`) {
      if(condition) {
        warn.remove()
      }
    }
  })
}